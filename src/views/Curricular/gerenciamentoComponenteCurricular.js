import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import apiService from "apiService"; 

const GerenciamentoComponenteCurricular = () => {
  const [data, setData] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [selectedComponente, setSelectedComponente] = useState(null);

  useEffect(() => {
    fetchData();
    fetchCursos();
  }, []);

  const fetchData = async () => {
    try {
      const componentes = await apiService.getAllComponentes();
      setData(componentes);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCursos = async () => {
    try {
      const cursosData = await apiService.getAllCursos();
      const cursosLookup = cursosData.reduce((lookup, curso) => {
        lookup[curso.id] = curso.descricao;
        return lookup;
      }, {});
      setCursos(cursosLookup);
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

  return (
    <>
      <MaterialTable
        title="Gerenciamento de Componente Curricular"
        columns={[
          { title: 'Id', field: 'id', editable: 'never' },
          { title: 'Nome do Componente', field: 'componente' },
          { title: 'Sigla do Componente', field: 'sigla' },
          { title: 'Matriz Curricular', field: 'matrizCurricular' },
          { title: 'Carga Horária', field: 'cargaHoraria' },
          {
            title: 'Curso',
            field: 'cursoId',
            lookup: cursos,
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

export default GerenciamentoComponenteCurricular;
