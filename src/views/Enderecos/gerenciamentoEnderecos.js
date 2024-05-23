import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from "material-table";

const GerenciamentoEnderecos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("https://demo8788642.mockable.io/enderecos")
      .then(response => {
        const enderecos = response.data.enderecos.map(c => ({
          id: c.id,
          rua: c.rua,
          numero: c.numero,
          cep: c.cep,
          cidade: c.cidade,
          estado: c.estado,
          pais: c.pais,
        }));
        setData(enderecos);
      })
      .catch(error => console.log(error));
  }

  function handleCreate(newData) {
    axios
      .post("https://demo8788642.mockable.io/enderecos", newData)
      .then(() => {
        console.log('Salvo com sucesso.');
        fetchData();
      })
      .catch(error => console.log(error));
  }

  function handleUpdate(newData) {
    axios
      .put(`https://demo8788642.mockable.io/enderecos/${newData.id}`, newData)
      .then(() => {
        console.log('Atualizado com sucesso.');
        fetchData();
      })
      .catch(error => console.log(error));
  }

  function handleDelete(oldData) {
    axios
      .delete(`https://demo8788642.mockable.io/enderecos/${oldData.id}`)
      .then(() => {
        console.log('Deletado com sucesso.');
        fetchData();
      })
      .catch(error => console.log(error));
  }

  return (
    <MaterialTable
      title="Gerenciamento de Endereços"
      columns={[
        { title: 'Id', field: 'id' },
        { title: 'Rua', field: 'rua' },
        { title: 'Numero', field: 'numero' },
        { title: 'CEP', field: 'cep' },
        { title: 'Cidade', field: 'cidade' },
        { title: 'Estado', field: 'estado' },
        { title: 'País', field: 'pais' }
      ]}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleCreate(newData);
              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleUpdate(newData);
              resolve();
            }, 1000);
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleDelete(oldData);
              resolve();
            }, 1000);
          }),
      }}
    />
  );
}

export default GerenciamentoEnderecos;