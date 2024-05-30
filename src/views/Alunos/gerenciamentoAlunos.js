import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import apiService from "apiService";

const GerenciamentoAlunos = () => {
  const [data, setData] = useState([]);
  const [enderecos, setEnderecos] = useState({});
  const [selectedEndereco, setSelectedEndereco] = useState(null);

  useEffect(() => {
    fetchData();
    fetchEnderecos();
  }, []);

  const fetchData = async () => {
    try {
      const alunos = await apiService.getAllAlunos();
      setData(alunos);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnderecos = async () => {
    try {
      const enderecosData = await apiService.getAllEnderecos();
      const options = {};
      enderecosData.forEach(endereco => {
        options[endereco.id] = `${endereco.id} - ${endereco.rua}`;
      });
      setEnderecos(options);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async (newData) => {
    try {
      await apiService.createAluno(newData);
      console.log('Aluno criado com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (newData, oldData) => {
    try {
      await apiService.updateAluno(oldData.id, newData);
      console.log('Aluno atualizado com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (oldData) => {
    try {
      await apiService.deleteAluno(oldData.id);
      console.log('Aluno deletado com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MaterialTable
        title="Gerenciamento de Alunos"
        columns={[
          { title: 'Id', field: 'id', editable: 'never' },
          { title: 'CPF', field: 'cpf' },
          { title: 'Matrícula', field: 'matricula', type: 'numeric' },
          { title: 'Nome Completo', field: 'nome' },
          {
            title: 'Endereço ID',
            field: 'enderecoId',
            lookup: enderecos,
          },
          { title: 'Curso', field: 'curso' }
        ]}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              handleCreate(newData);
              resolve();
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              handleUpdate(newData, oldData);
              resolve();
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              handleDelete(oldData);
              resolve();
            }),
        }}
      />
    </>
  );
};

export default GerenciamentoAlunos;
