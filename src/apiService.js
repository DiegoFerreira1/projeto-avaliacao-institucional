import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const apiService = {
  getAllAlunos: async () => {
    const response = await api.get('/alunos');
    return response.data;
  },

  createAluno: async (alunoData) => {
    const response = await api.post('/alunos', alunoData);
    return response.data;
  },

  updateAluno: async (alunoId, alunoData) => {
    const response = await api.put(`/alunos/${alunoId}`, alunoData);
    return response.data;
  },

  deleteAluno: async (alunoId) => {
    const response = await api.delete(`/alunos/${alunoId}`);
    return response.data;
  },
};

export default apiService;
