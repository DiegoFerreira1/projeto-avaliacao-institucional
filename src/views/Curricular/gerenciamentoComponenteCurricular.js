import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from "material-table";

const GerenciamentoComponenteCurricular = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://demo8788642.mockable.io/componentes")
      .then(response => {
        const componentes = response.data.lista.map(c => ({
          id: c.id,
          nome: c.nome,
          sigla: c.sigla,
          matrizCurricular: c.matrizCurricular,
          cargaHoraria: c.cargaHoraria,
        }));
        setData(componentes);
      })
      .catch(error => console.log(error));
  };

  const handleCreate = newData => {
    axios
      .post("https://demo8788642.mockable.io/componentes", newData)
      .then(response => {
        console.log('Componente curricular salvo com sucesso.');
        setData(prevData => [...prevData, newData]);
      })
      .catch(error => console.log(error));
  };

  const handleUpdate = (newData, oldData) => {
    axios
      .put(`https://demo8788642.mockable.io/componentes/${oldData.id}`, newData)
      .then(response => {
        console.log('Componente curricular atualizado com sucesso.');
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
      .delete(`https://demo8788642.mockable.io/componentes/${oldData.id}`)
      .then(response => {
        console.log('Componente curricular deletado com sucesso.');
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
        title="Gerenciamento de Componente Curricular"
        columns={[
          { title: 'Id', field: 'id', editable: 'never' },
          { title: 'Nome do Componente', field: 'nome' },
          { title: 'Sigla do Componente', field: 'sigla' },
          { title: 'Matriz Curricular', field: 'matrizCurricular' },
          { title: 'Carga Horária', field: 'cargaHoraria' },
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
