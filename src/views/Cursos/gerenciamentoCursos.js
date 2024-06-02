import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import apiService from 'apiService'; 

const GerenciamentoCursos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const cursos = await apiService.getAllCursos();
      setData(cursos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async (newData) => {
    try {
      await apiService.createCurso(newData);
      console.log('Curso criado com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (newData, oldData) => {
    try {
      await apiService.updateCurso(oldData.id, newData);
      console.log('Curso atualizado com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (oldData) => {
    try {
      await apiService.deleteCurso(oldData.id);
      console.log('Curso deletado com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MaterialTable
      title="Gerenciamento de Cursos"
      columns={[
        { title: 'Id', field: 'id', editable: 'never' },
        { title: 'Descrição', field: 'descricao' }
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
  );
};

export default GerenciamentoCursos;

// const handleAssociateAluno = async (alunoId) => {
//   try {
//     await apiService.associarAlunoComponente(selectedComponente.id, alunoId);
//     console.log('Aluno associado ao componente curricular.');
//     fetchAlunosComponente(selectedComponente.id);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const handleDisassociateAluno = async (alunoId) => {
//   try {
//     await apiService.desassociarAlunoComponente(selectedComponente.id, alunoId);
//     console.log('Aluno desassociado do componente curricular.');
//     fetchAlunosComponente(selectedComponente.id);
//   } catch (error) {
//     console.error(error);
//   }
// };
// actions={[
//   {
//     icon: 'person_add',
//     tooltip: 'Associar Aluno',
//     onClick: (event, rowData) => handleAssociateAluno(rowData.id)
//   },
//   {
//     icon: 'person_remove',
//     tooltip: 'Desassociar Aluno',
//     onClick: (event, rowData) => handleDisassociateAluno(rowData.id)
//   }
// ]}
// />
// {selectedComponente && (
// <MaterialTable
//   title={`Alunos do Componente ${selectedComponente.nome}`}
//   columns={[
//     { title: 'Id', field: 'id', editable: 'never' },
//     { title: 'CPF', field: 'cpf' },
//     { title: 'Matrícula', field: 'matricula', type: 'numeric' },
//     { title: 'Nome Completo', field: 'nome' },
//   ]}
//   data={alunosComponente}
// />
// )}