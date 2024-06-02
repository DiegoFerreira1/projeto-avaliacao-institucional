import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import apiService from "apiService"; 

const GerenciamentoAvaliacoes = () => {
  const [data, setData] = useState([]);
  const [componentes, setComponentes] = useState({});
  const [alunos, setAlunos] = useState({});

  useEffect(() => {
    fetchData();
    fetchComponentes();
    fetchAlunos();
  }, []);

  const fetchData = async () => {
    try {
      const avaliacoes = await apiService.getAllAvaliacoes();
      setData(avaliacoes);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchComponentes = async () => {
    try {
      const componentesData = await apiService.getAllComponentes();
      const options = {};
      componentesData.forEach(componente => {
        options[componente.id] = componente.nome; // Usando o nome do componente como label
      });
      setComponentes(options);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAlunos = async () => {
    try {
      const alunosData = await apiService.getAllAlunos();
      const options = {};
      alunosData.forEach(aluno => {
        options[aluno.id] = aluno.nome; // Usando o nome do aluno como label
      });
      setAlunos(options);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async (newData) => {
    try {
      const newDataWithIds = {
        ...newData,
        idAluno: newData.idAluno,
        idComponenteCurricular: newData.idComponenteCurricular,
      };
      await apiService.createAvaliacao(newDataWithIds);
      console.log('Avaliação criada com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (newData, oldData) => {
    try {
      const newDataWithIds = {
        ...newData,
        idAluno: newData.idAluno,
        idComponenteCurricular: newData.idComponenteCurricular,
      };
      await apiService.updateAvaliacao(oldData.id, newDataWithIds);
      console.log('Avaliação atualizada com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (oldData) => {
    try {
      await apiService.deleteAvaliacao(oldData.id);
      console.log('Avaliação deletada com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MaterialTable
        title="Gerenciamento de Avaliações"
        columns={[
          { title: 'Id', field: 'id', editable: 'never' },
          { title: 'Período da Avaliação', field: 'periodo', type: 'string', validate: rowData => rowData.periodo?.length === 6 },
          { title: 'Componente Curricular', field: 'idComponenteCurricular', lookup: componentes },
          { title: 'Aluno', field: 'idAluno', lookup: alunos },
          { title: 'Categoria da Avaliação', field: 'categoria', type: 'string' },
          {
            title: 'Conceito do Professor',
            field: 'conceitoProfessor',
            type: 'numeric',
            lookup: { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10' },
          },
          {
            title: 'Conceito do Recurso Didático',
            field: 'conceitoRecurso',
            type: 'numeric',
            lookup: { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10' },
          },
          {
            title: 'Conceito da Relevância da Disciplina',
            field: 'conceitoRelevancia',
            type: 'numeric',
            lookup: { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10' },
          },
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

export default GerenciamentoAvaliacoes;
