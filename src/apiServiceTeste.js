import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

//Crud de Alunos
export const getAllAlunos = async () => {
  try {
    const response = await api.get('/alunos');
    return response.data;
  } catch (error) {
    console.error('Error fetching alunos:', error);
    throw error;
  }
};

export const createAluno = async (aluno) => {
  try {
    const response = await api.post('/alunos', aluno);
    return response.data;
  } catch (error) {
    console.error('Error creating aluno:', error);
    throw error;
  }
};

export const updateAluno = async (id, aluno) => {
  try {
    const response = await api.put(`/alunos/${id}`, aluno);
    return response.data;
  } catch (error) {
    console.error('Error updating aluno:', error);
    throw error;
  }
};

export const deleteAluno = async (id) => {
  try {
    const response = await api.delete(`/alunos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting aluno:', error);
    throw error;
  }
};

//Crud de Endereços
export const getAllEnderecos = async () => {
  try {
    const response = await api.get('/enderecos');
    return response.data;
  } catch (error) {
    console.error('Error fetching enderecos:', error);
    throw error;
  }
};

export const createEndereco = async (endereco) => {
  try {
    const response = await api.post('/enderecos', endereco);
    return response.data;
  } catch (error) {
    console.error('Error creating endereco:', error);
    throw error;
  }
};

export const updateEndereco = async (id, endereco) => {
  try {
    const response = await api.put(`/enderecos/${id}`, endereco);
    return response.data;
  } catch (error) {
    console.error('Error updating endereco:', error);
    throw error;
  }
};

export const deleteEndereco = async (id) => {
  try {
    const response = await api.delete(`/enderecos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting endereco:', error);
    throw error;
  }
};


export default {
  getAllAlunos,
  createAluno,
  updateAluno,
  deleteAluno,
  getAllEnderecos,
  createEndereco,
  updateEndereco,
  deleteEndereco
};
