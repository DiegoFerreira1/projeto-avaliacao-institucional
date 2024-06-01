const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  cpf: { type: String, required: true },
  matricula: { type: Number, required: true },
  nome: { type: String, required: true },
  enderecoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Endereco' },
  curso: { type: String, required: true },
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;
