import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from "material-table";


const GerenciamentoAlunos = () => {
  const [data, setData] = useState([]);
  const [selectedEndereco, setSelectedEndereco] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://demo8788642.mockable.io/alunos")
      .then(response => {
        const alunos = response.data.lista.map(c => ({
          id: c.id,
          cpf: c.cpf,
          matricula: c.matricula,
          nome: c.nome,
          enderecoId: c.enderecoId,
          curso: c.curso
        }));
        setData(alunos);
      })
      .catch(error => console.log(error));
  };

  const handleCreate = newData => {
    axios
      .post("https://demo8788642.mockable.io/alunos", newData)
      .then(response => {
        console.log('Aluno salvo com sucesso.');
        setData(prevData => [...prevData, newData]);
      })
      .catch(error => console.log(error));
  };

  const handleUpdate = (newData, oldData) => {
    axios
      .put(`https://demo8788642.mockable.io/alunos/${oldData.id}`, newData)
      .then(response => {
        console.log('Aluno atualizado com sucesso.');
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
      .delete(`https://demo8788642.mockable.io/alunos/${oldData.id}`)
      .then(response => {
        console.log('Aluno deletado com sucesso.');
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
        title="Gerenciamento de Alunos"
        columns={[
          { title: 'Id', field: 'id', editable: 'never' },
          { title: 'CPF', field: 'cpf' },
          { title: 'Matrícula', field: 'matricula', type: 'numeric' },
          { title: 'Nome Completo', field: 'nome' },
          { title: 'Endereço ID', field: 'enderecoId', editable: 'never' },
          { title: 'Curso', field: 'curso' }
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

export default GerenciamentoAlunos;
