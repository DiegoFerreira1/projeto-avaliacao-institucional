import axios from 'axios';


const api = axios.create({
  // baseURL: 'https://demo8788642.mockable.io/',
  baseURL: 'https://demo0167342.mockable.io/' 
});

const apiService = {

  // Operações CRUD em alunos
  
    getAllAlunos: async () => {
      try {
        const response = await api.get('alunos');
        return response.data.lista.map(c => ({
          id: c.id,
          cpf: c.cpf,
          matricula: c.matricula,
          nome: c.nome,
          enderecoId: c.enderecoId,
          curso: c.curso
        }));
      } catch (error) {
        throw new Error('Erro ao buscar alunos: ' + error.message);
      }
    },
  
    createAluno: async (alunoData) => {
      try {
        const response = await api.post('alunos', alunoData);
        return response.data;
      } catch (error) {
        throw new Error('Erro ao criar aluno: ' + error.message);
      }
    },
  
    updateAluno: async (alunoId, alunoData) => {
      try {
        const response = await api.put(`alunos/${alunoId}`, alunoData);
        return response.data;
      } catch (error) {
        throw new Error('Erro ao atualizar aluno: ' + error.message);
      }
    },
  
    deleteAluno: async (alunoId) => {
      try {
        const response = await api.delete(`alunos/${alunoId}`);
        return response.data;
      } catch (error) {
        throw new Error('Erro ao deletar aluno: ' + error.message);
      }
    },

  // Operações CRUD para Gerenciamento de Avaliação
  getAllAvaliacoes: async () => {
    try {
      const response = await api.get('avaliacoes');
      return response.data.lista.map(a => ({
        id: a.id,
        periodo: a.periodo,
        componenteCurricular: a.componenteCurricular,
        categoria: a.categoria,
        conceitoProfessor: a.conceitoProfessor,
        conceitoRecurso: a.conceitoRecurso,
        conceitoRelevancia: a.conceitoRelevancia,
      }));
    } catch (error) {
      throw new Error('Erro ao buscar avaliações: ' + error.message);
    }
  },
  
  createAvaliacao: async (avaliacaoData) => {
    try {
      const response = await api.post('avaliacoes', avaliacaoData);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao criar avaliação: ' + error.message);
    }
  },
  
  updateAvaliacao: async (avaliacaoId, avaliacaoData) => {
    try {
      const response = await api.put(`avaliacoes/${avaliacaoId}`, avaliacaoData);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao atualizar avaliação: ' + error.message);
    }
  },
  
  deleteAvaliacao: async (avaliacaoId) => {
    try {
      const response = await api.delete(`avaliacoes/${avaliacaoId}`);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao deletar avaliação: ' + error.message);
    }
  },
  
    // Operações CRUD para Gerenciamento de Componentes Curriculares

    getAllComponentes: async () => {
      try {
        const response = await api.get('componentes');
        return response.data.lista.map(c => ({
          id: c.id,
          nome: c.nome,
          sigla: c.sigla,
          matrizCurricular: c.matrizCurricular,
          cargaHoraria: c.cargaHoraria,
        }));
      } catch (error) {
        throw new Error('Erro ao buscar componentes curriculares: ' + error.message);
      }
    },
  
    createComponente: async (componenteData) => {
      try {
        const response = await api.post('componentes', componenteData);
        return response.data;
      } catch (error) {
        throw new Error('Erro ao criar componente curricular: ' + error.message);
      }
    },
  
    updateComponente: async (componenteId, componenteData) => {
      try {
        const response = await api.put(`componentes/${componenteId}`, componenteData);
        return response.data;
      } catch (error) {
        throw new Error('Erro ao atualizar componente curricular: ' + error.message);
      }
    },
  
    deleteComponente: async (componenteId) => {
      try {
        const response = await api.delete(`componentes/${componenteId}`);
        return response.data;
      } catch (error) {
        throw new Error('Erro ao deletar componente curricular: ' + error.message);
      }
    },

  // Operações CRUD para Gerenciamento de Endereços

  getAllEnderecos: async () => {
    try {
      const response = await api.get('enderecos');
      return response.data.lista.map(e => ({
        id: e.id,
        rua: e.rua,
        numero: e.numero,
        cep: e.cep,
        cidade: e.cidade,
        estado: e.estado,
        pais: e.pais,
      }));
    } catch (error) {
      throw new Error('Erro ao buscar endereços: ' + error.message);
    }
  },

  createEndereco: async (enderecoData) => {
    try {
      const response = await api.post('enderecos', enderecoData);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao criar endereço: ' + error.message);
    }
  },

  updateEndereco: async (enderecoId, enderecoData) => {
    try {
      const response = await api.put(`enderecos/${enderecoId}`, enderecoData);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao atualizar endereço: ' + error.message);
    }
  },

  deleteEndereco: async (enderecoId) => {
    try {
      const response = await api.delete(`enderecos/${enderecoId}`);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao deletar endereço: ' + error.message);
    }
  }
    
};

export default apiService;
