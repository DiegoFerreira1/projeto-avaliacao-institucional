import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import apiService from 'apiService';

const GerenciamentoAvaliacoes = () => {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [categoriasLookup, setCategoriasLookup] = useState({});
  const [componentesLookup, setComponentesLookup] = useState({});
  const [alunosLookup, setAlunosLookup] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const avaliacoesData = await apiService.getAllAvaliacoes();
      setAvaliacoes(avaliacoesData);

      const categoriasData = await apiService.getAllCategorias();
      const categoriasOptions = categoriasData.reduce((lookup, categoria) => {
        lookup[categoria.id] = categoria.categoria;
        return lookup;
      }, {});
      setCategoriasLookup(categoriasOptions);

      const componentesData = await apiService.getAllComponentes();
      const componentesOptions = componentesData.reduce((lookup, componente) => {
        lookup[componente.id] = componente.componente;
        return lookup;
      }, {});
      setComponentesLookup(componentesOptions);

      const alunosData = await apiService.getAllAlunos();
      const alunosOptions = alunosData.reduce((lookup, aluno) => {
        lookup[aluno.id] = aluno.nomeCompleto;
        return lookup;
      }, {});
      setAlunosLookup(alunosOptions);

    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async (newData) => {
    try {
      await apiService.createAvaliacao(newData);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (newData, oldData) => {
    try {
      await apiService.updateAvaliacao(oldData.id, newData);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (oldData) => {
    try {
      await apiService.deleteAvaliacao(oldData.id);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MaterialTable
      title="Gerenciamento de Avaliações"
      columns={[
        { title: 'Id', field: 'id', editable: 'never' },
        { title: 'Período', field: 'periodoAvaliacao', type: 'string', validate: rowData => rowData.periodoAvaliacao?.length === 6 },
        { title: 'Categoria', field: 'categoriaId', lookup: categoriasLookup },
        { title: 'Componente Curricular', field: 'componenteId', lookup: componentesLookup },
        { title: 'Aluno', field: 'alunoId', lookup: alunosLookup },
        { title: 'Conceito Professor', field: 'conceitoProfessor', type: 'numeric' },
        { title: 'Conceito Didática', field: 'conceitoRecurso', type: 'numeric' },
        { title: 'Conceito Relevância da Disciplina', field: 'conceitoRelevancia', type: 'numeric' },
      ]}
      data={avaliacoes}
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

export default GerenciamentoAvaliacoes;
