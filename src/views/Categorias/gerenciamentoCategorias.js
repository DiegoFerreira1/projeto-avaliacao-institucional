import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import apiService from "apiService"; 

const GerenciamentoCategorias = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const categorias = await apiService.getAllCategorias();
      setData(categorias);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async (newData) => {
    try {
      await apiService.createCategoria(newData);
      console.log('Categoria criada com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (newData, oldData) => {
    try {
      await apiService.updateCategoria(oldData.id, newData);
      console.log('Categoria atualizada com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (oldData) => {
    try {
      await apiService.deleteCategoria(oldData.id);
      console.log('Categoria deletada com sucesso.');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MaterialTable
        title="Gerenciamento de Categorias"
        columns={[
          { title: 'Id', field: 'id', editable: 'never' },
          { title: 'Categoria', field: 'categoria' },
          { title: 'Descrição', field: 'descricao' },
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

export default GerenciamentoCategorias;
