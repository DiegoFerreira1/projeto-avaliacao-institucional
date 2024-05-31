import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import apiService from "apiServiceTeste"; 

const GerenciamentoEndereco = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const enderecos = await apiService.getAllEnderecos(); 
      setData(enderecos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async (newData) => {
    try {
      await apiService.createEndereco(newData); 
      console.log('Endereço criado com sucesso.');
      fetchData(); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (newData, oldData) => {
    try {
      await apiService.updateEndereco(oldData.id, newData); 
      console.log('Endereço atualizado com sucesso.');
      fetchData(); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (oldData) => {
    try {
      await apiService.deleteEndereco(oldData.id); 
      console.log('Endereço deletado com sucesso.');
      fetchData(); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MaterialTable
        title="Gerenciamento de Endereço"
        columns={[
          { title: 'Id', field: 'id', editable: 'never' },
          { title: 'Rua', field: 'rua' },
          { title: 'Número', field: 'numero' },
          { title: 'CEP', field: 'cep' },
          { title: 'Cidade', field: 'cidade' },
          { title: 'Estado', field: 'estado' },
          { title: 'País', field: 'pais' },
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

export default GerenciamentoEndereco;
