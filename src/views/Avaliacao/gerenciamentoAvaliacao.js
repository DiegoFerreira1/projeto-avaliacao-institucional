import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import apiService from "apiService";

const GerenciamentoAvaliacao = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const avaliacoes = await apiService.getAllAvaliacoes(); 
      setData(avaliacoes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async (newData) => {
    try {
      await apiService.createAvaliacao(newData); 
      console.log('Avaliação criada com sucesso.');
      fetchData(); 
    } catch (error) {
      console.error(error);
    }
  };

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
        }}
      />
    </>
  );
};

export default GerenciamentoAvaliacao;
