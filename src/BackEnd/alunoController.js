const Aluno = require('./alunoModel');

const getAllAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find().populate('enderecoId');
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAluno = async (req, res) => {
  const { cpf, matricula, nome, enderecoId, curso } = req.body;
  const aluno = new Aluno({ cpf, matricula, nome, enderecoId, curso });
  try {
    const newAluno = await aluno.save();
    res.status(201).json(newAluno);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateAluno = async (req, res) => {
  const { id } = req.params;
  const { cpf, matricula, nome, enderecoId, curso } = req.body;
  try {
    const updatedAluno = await Aluno.findByIdAndUpdate(id, { cpf, matricula, nome, enderecoId, curso }, { new: true });
    res.json(updatedAluno);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAluno = async (req, res) => {
  const { id } = req.params;
  try {
    await Aluno.findByIdAndDelete(id);
    res.json({ message: 'Aluno deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllAlunos,
  createAluno,
  updateAluno,
  deleteAluno,
};
