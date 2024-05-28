import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from "material-table";

const GerenciamentoEndereco = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://demo8788642.mockable.io/enderecos")
      .then(response => {
        const enderecos = response.data.lista.map(e => ({
          id: e.id,
          rua: e.rua,
          numero: e.numero,
          cep: e.cep,
          cidade: e.cidade,
          estado: e.estado,
          pais: e.pais,
        }));
        setData(enderecos);
      })
      .catch(error => console.log(error));
  };

  const handleCreate = newData => {
    axios
      .post("https://demo8788642.mockable.io/enderecos", newData)
      .then(response => {
        console.log('Endereço salvo com sucesso.');
        setData(prevData => [...prevData, newData]);
      })
      .catch(error => console.log(error));
  };

  const handleUpdate = (newData, oldData) => {
    axios
      .put(`https://demo8788642.mockable.io/enderecos/${oldData.id}`, newData)
      .then(response => {
        console.log('Endereço atualizado com sucesso.');
        setData(prevData => {
          const dataUpdate = [...prevData];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          return dataUpdate;
        });
      })
      .catch(error => console.log(error));
  };

  const handleDelete = oldData => {
    axios
      .delete(`https://demo8788642.mockable.io/enderecos/${oldData.id}`)
      .then(response => {
        console.log('Endereço deletado com sucesso.');
        setData(prevData => {
          const dataDelete = [...prevData];
          const index = oldData.tableData.id;
          dataDelete.splice(index, 1);
          return dataDelete;
        });
      })
      .catch(error => console.log(error));
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
