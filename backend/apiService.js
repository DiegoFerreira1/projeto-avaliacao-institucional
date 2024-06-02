import Aluno from './models/Aluno.js';

// Aluno CRUD operations
const apiService = {
  getAllAlunos: async () => {
    return await Aluno.find();
  },
  createAluno: async (alunoData) => {
    const novoAluno = new Aluno(alunoData);
    return await novoAluno.save();
  },
  updateAluno: async (alunoId, alunoData) => {
    return await Aluno.findByIdAndUpdate(alunoId, alunoData, { new: true });
  },
  deleteAluno: async (alunoId) => {
    return await Aluno.findByIdAndDelete(alunoId);
  },
};

export default apiService;
