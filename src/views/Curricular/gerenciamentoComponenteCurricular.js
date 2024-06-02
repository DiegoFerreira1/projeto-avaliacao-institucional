import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import apiService from "apiService"; 

const GerenciamentoComponenteCurricular = () => {
  const [data, setData] = useState([]);
  const [alunosComponente, setAlunosComponente] = useState([]);
  const [selectedComponente, setSelectedComponente] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const componentes = await apiService.getAllComponentes();
      setData(componentes);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAlunosComponente = async (componenteId) => {
    try {
      const alunos = await apiService.getAlunosPorComponente(componenteId);
      setAlunosComponente(alunos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async (newData) => {
    try {
      await apiService.createComponente(newData); 
      console.log('Componente curricular criado com sucesso.');
      fetchData(); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (newData, oldData) => {
    try {
      await apiService.updateComponente(oldData.id, newData); 
      console.log('Componente curricular atualizado com sucesso.');
      fetchData(); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (oldData) => {
    try {
      await apiService.deleteComponente(oldData.id); 
      console.log('Componente curricular deletado com sucesso.');
      fetchData(); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleAssociateAluno = async (alunoId) => {
    try {
      await apiService.associarAlunoComponente(selectedComponente.id, alunoId);
      console.log('Aluno associado ao componente curricular.');
      fetchAlunosComponente(selectedComponente.id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisassociateAluno = async (alunoId) => {
    try {
      await apiService.desassociarAlunoComponente(selectedComponente.id, alunoId);
      console.log('Aluno desassociado do componente curricular.');
      fetchAlunosComponente(selectedComponente.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MaterialTable
        title="Gerenciamento de Componente Curricular"
        columns={[
          { title: 'Id', field: 'id', editable: 'never' },
          { title: 'Nome do Componente', field: 'nome' },
          { title: 'Sigla do Componente', field: 'sigla' },
          { title: 'Matriz Curricular', field: 'matrizCurricular' },
          { title: 'Carga Horária', field: 'cargaHoraria' },
        ]}
        data={data}
        onRowClick={(evt, rowData) => {
          setSelectedComponente(rowData);
          fetchAlunosComponente(rowData.id);
        }}
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
        actions={[
          {
            icon: 'person_add',
            tooltip: 'Associar Aluno',
            onClick: (event, rowData) => handleAssociateAluno(rowData.id)
          },
          {
            icon: 'person_remove',
            tooltip: 'Desassociar Aluno',
            onClick: (event, rowData) => handleDisassociateAluno(rowData.id)
          }
        ]}
      />
      {selectedComponente && (
        <MaterialTable
          title={`Alunos do Componente ${selectedComponente.nome}`}
          columns={[
            { title: 'Id', field: 'id', editable: 'never' },
            { title: 'CPF', field: 'cpf' },
            { title: 'Matrícula', field: 'matricula', type: 'numeric' },
            { title: 'Nome Completo', field: 'nome' },
          ]}
          data={alunosComponente}
        />
      )}
    </>
  );
};

export default GerenciamentoComponenteCurricular;
