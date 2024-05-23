import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from "material-table";

const GerenciamentoProfessores = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://demo8788642.mockable.io/professores")
      .then(response => {
        const professores = response.data.lista.map(c => ({
          id: c.id,
          cpf: c.cpf,
          nome: c.nome,
          departamento: c.departamento,
          email: c.email
        }));
        setData(professores);
      })
      .catch(error => console.log(error));
  };

  const handleCreate = newData => {
    axios
      .post("https://demo8788642.mockable.io/professores", newData)
      .then(response => {
        console.log('Salvo com sucesso.');
        setData(prevData => [...prevData, newData]);
      })
      .catch(error => console.log(error));
  };

  const handleUpdate = (newData, oldData) => {
    axios
      .put(`https://demo8788642.mockable.io/professores/${oldData.id}`, newData)
      .then(response => {
        console.log('Atualizado com sucesso.');
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
      .delete(`https://demo8788642.mockable.io/professores/${oldData.id}`)
      .then(response => {
        console.log('Deletado com sucesso.');
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
    <MaterialTable
      title="Gerenciamento de Professores"
      columns={[
        { title: 'Id', field: 'id' },
        { title: 'CPF', field: 'cpf' },
        { title: 'Nome', field: 'nome' },
        { title: 'Departamento', field: 'departamento' },
        { title: 'Email', field: 'email' }
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

export default GerenciamentoProfessores;
