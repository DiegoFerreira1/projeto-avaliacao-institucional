import Aluno from '../models/Aluno.js';

const getAllAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.json(alunos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar alunos' });
  }
};

const createAluno = async (req, res) => {
  try {
    const novoAluno = new Aluno(req.body);
    const alunoSalvo = await novoAluno.save();
    res.status(201).json(alunoSalvo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar aluno' });
  }
};

const updateAluno = async (req, res) => {
  try {
    const { id } = req.params;
    const alunoAtualizado = await Aluno.findByIdAndUpdate(id, req.body, { new: true });
    res.json(alunoAtualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar aluno' });
  }
};

const deleteAluno = async (req, res) => {
  try {
    const { id } = req.params;
    await Aluno.findByIdAndDelete(id);
    res.json({ message: 'Aluno deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar aluno' });
  }
};

export { getAllAlunos, createAluno, updateAluno, deleteAluno };
