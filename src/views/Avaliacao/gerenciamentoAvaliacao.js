import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from "material-table";

const GerenciamentoAvaliacao = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://demo8788642.mockable.io/avaliacoes")
      .then(response => {
        const avaliacoes = response.data.lista.map(a => ({
          id: a.id,
          nome: a.nome,
          tipo: a.tipo,
          data: a.data,
          nota: a.nota,
        }));
        setData(avaliacoes);
      })
      .catch(error => console.log(error));
  };

  const handleCreate = newData => {
    axios
      .post("https://demo8788642.mockable.io/avaliacoes", newData)
      .then(response => {
        console.log('Avaliação salva com sucesso.');
        setData(prevData => [...prevData, newData]);
      })
      .catch(error => console.log(error));
  };

  // Funções handleUpdate e handleDelete semelhantes às do Gerenciamento de Alunos

  return (
    <>
      <MaterialTable
        title="Gerenciamento de Avaliação"
        columns={[
          { title: 'Id', field: 'id', editable: 'never' },
          { title: 'Nome', field: 'nome' },
          { title: 'Tipo', field: 'tipo' },
          { title: 'Data', field: 'data', type: 'date' },
          { title: 'Nota', field: 'nota', type: 'numeric' },
        ]}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              handleCreate(newData);
              resolve();
            }),
          // onRowUpdate e onRowDelete semelhantes às do Gerenciamento de Alunos
        }}
      />
    </>
  );
};

export default GerenciamentoAvaliacao;
