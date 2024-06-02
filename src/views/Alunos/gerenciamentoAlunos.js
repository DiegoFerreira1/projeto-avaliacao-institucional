import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import apiService from 'apiService';

const GerenciamentoAlunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [enderecos, setEnderecos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const alunosData = await apiService.getAllAlunos();
      setAlunos(alunosData);

      const cursosData = await apiService.getAllCursos();
      setCursos(cursosData);

      const enderecosData = await apiService.getAllEnderecos();
      setEnderecos(enderecosData);
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
    <MaterialTable
      title="Gerenciamento de Alunos"
      columns={[
        { title: 'Id', field: 'id', editable: 'never' },
        { title: 'Matrícula', field: 'matricula' },
        { title: 'Nome Completo', field: 'nomeCompleto' },
        { title: 'CPF', field: 'cpf' },
        { title: 'Número', field: 'numero' },
        {
          title: 'Endereço',
          field: 'enderecoId',
          lookup: enderecos.reduce((lookup, endereco) => {
            lookup[endereco.id] = `${endereco.rua}, ${endereco.cidade}`;
            return lookup;
          }, {})
        },
        {
          title: 'Curso',
          field: 'cursoId',
          lookup: cursos.reduce((lookup, curso) => {
            lookup[curso.id] = curso.descricao;
            return lookup;
          }, {})
        },
      ]}
      data={alunos}
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
  );
};

export default GerenciamentoAlunos;
