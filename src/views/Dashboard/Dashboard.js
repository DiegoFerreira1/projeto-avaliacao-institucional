import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import apiService from 'apiService';

const DashboardAvaliacoes = () => {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [categoriaData, setCategoriaData] = useState([]);
  const [conceitoData, setConceitoData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const avaliacoesData = await apiService.getAllAvaliacoes();
      setAvaliacoes(avaliacoesData);
      prepareData(avaliacoesData);
    } catch (error) {
      console.error(error);
    }
  };

  const prepareData = (avaliacoes) => {
    const categoriaCount = {};
    const conceitoCount = {
      conceitoProfessor: 0,
      conceitoRecurso: 0,
      conceitoRelevancia: 0,
    };

    avaliacoes.forEach(avaliacao => {
      if (categoriaCount[avaliacao.categoriaId]) {
        categoriaCount[avaliacao.categoriaId] += 1;
      } else {
        categoriaCount[avaliacao.categoriaId] = 1;
      }
      conceitoCount.conceitoProfessor += avaliacao.conceitoProfessor;
      conceitoCount.conceitoRecurso += avaliacao.conceitoRecurso;
      conceitoCount.conceitoRelevancia += avaliacao.conceitoRelevancia;
    });

    const categoriaData = Object.keys(categoriaCount).map(key => ({
      name: `Categoria ${key}`,
      value: categoriaCount[key],
    }));

    const conceitoData = [
      { name: 'Conceito do Professor', value: conceitoCount.conceitoProfessor },
      { name: 'Conceito do Recurso Didático', value: conceitoCount.conceitoRecurso },
      { name: 'Conceito da Relevância da Disciplina', value: conceitoCount.conceitoRelevancia },
    ];

    setCategoriaData(categoriaData);
    setConceitoData(conceitoData);
  };

  return (
    <div>
      <h2>Dashboard de Avaliações</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>Avaliações por Categoria</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={categoriaData}
              cx={200}
              cy={200}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {categoriaData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div>
          <h3>Média dos Conceitos</h3>
          <BarChart
            width={500}
            height={300}
            data={conceitoData}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardAvaliacoes;
