import axios from "axios";

const BASE_URL = 'http://localhost:3000';

const apiService = {

  // Funções para controle de cursos
  getAllCursos: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cursos`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter cursos:", error);
      throw error;
    }
  },

  createCurso: async (curso) => {
    try {
      await axios.post(`${BASE_URL}/cursos`, curso);
    } catch (error) {
      console.error("Erro ao criar curso:", error);
      throw error;
    }
  },

  updateCurso: async (id, curso) => {
    try {
      await axios.put(`${BASE_URL}/cursos/${id}`, curso);
    } catch (error) {
      console.error("Erro ao atualizar curso:", error);
      throw error;
    }
  },

  deleteCurso: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/cursos/${id}`);
    } catch (error) {
      console.error("Erro ao deletar curso:", error);
      throw error;
    }
  },

  // Funções para controle de componentes curriculares
  getAllComponentes: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/componentes`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter componentes:", error);
      throw error;
    }
  },

  createComponente: async (componente) => {
    try {
      await axios.post(`${BASE_URL}/componentes`, componente);
    } catch (error) {
      console.error("Erro ao criar componente:", error);
      throw error;
    }
  },

  updateComponente: async (id, componente) => {
    try {
      await axios.put(`${BASE_URL}/componentes/${id}`, componente);
    } catch (error) {
      console.error("Erro ao atualizar componente:", error);
      throw error;
    }
  },

  deleteComponente: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/componentes/${id}`);
    } catch (error) {
      console.error("Erro ao deletar componente:", error);
      throw error;
    }
  },

  // Funções para controle de endereços
  getAllEnderecos: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/enderecos`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter endereços:", error);
      throw error;
    }
  },

  createEndereco: async (endereco) => {
    try {
      await axios.post(`${BASE_URL}/enderecos`, endereco);
    } catch (error) {
      console.error("Erro ao criar endereço:", error);
      throw error;
    }
  },

  updateEndereco: async (id, endereco) => {
    try {
      await axios.put(`${BASE_URL}/enderecos/${id}`, endereco);
    } catch (error) {
      console.error("Erro ao atualizar endereço:", error);
      throw error;
    }
  },

  deleteEndereco: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/enderecos/${id}`);
    } catch (error) {
      console.error("Erro ao deletar endereço:", error);
      throw error;
    }
  },

  // Funções para controle de alunos
  getAllAlunos: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/alunos`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter alunos:", error);
      throw error;
    }
  },

  createAluno: async (aluno) => {
    try {
      await axios.post(`${BASE_URL}/alunos`, aluno);
    } catch (error) {
      console.error("Erro ao criar aluno:", error);
      throw error;
    }
  },

  updateAluno: async (id, aluno) => {
    try {
      await axios.put(`${BASE_URL}/alunos/${id}`, aluno);
    } catch (error) {
      console.error("Erro ao atualizar aluno:", error);
      throw error;
    }
  },

  deleteAluno: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/alunos/${id}`);
    } catch (error) {
      console.error("Erro ao deletar aluno:", error);
      throw error;
    }
  },

  //Funções para controle de Avaliações
  getAllAvaliacoes: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/avaliacoes`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter avaliações:", error);
      throw error;
    }
  },

  createAvaliacao: async (avaliacao) => {
    try {
      await axios.post(`${BASE_URL}/avaliacoes`, avaliacao);
    } catch (error) {
      console.error("Erro ao criar avaliação:", error);
      throw error;
    }
  },

  updateAvaliacao: async (id, avaliacao) => {
    try {
      await axios.put(`${BASE_URL}/avaliacoes/${id}`, avaliacao);
    } catch (error) {
      console.error("Erro ao atualizar avaliação:", error);
      throw error;
    }
  },

  deleteAvaliacao: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/avaliacoes/${id}`);
    } catch (error) {
      console.error("Erro ao deletar avaliação:", error);
      throw error;
    }
  },

  // Funções para controle de categorias de avaliação
  getAllCategorias: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categorias`);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter categorias de avaliação:", error);
      throw error;
    }
  },

  createCategoria: async (categoria) => {
    try {
      await axios.post(`${BASE_URL}/categorias`, categoria);
    } catch (error) {
      console.error("Erro ao criar categoria de avaliação:", error);
      throw error;
    }
  },

  updateCategoria: async (id, categoria) => {
    try {
      await axios.put(`${BASE_URL}/categorias/${id}`, categoria);
    } catch (error) {
      console.error("Erro ao atualizar categoria de avaliação:", error);
      throw error;
    }
  },

  deleteCategoria: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/categorias/${id}`);
    } catch (error) {
      console.error("Erro ao deletar categoria de avaliação:", error);
      throw error;
    }
  },
};

export default apiService;
