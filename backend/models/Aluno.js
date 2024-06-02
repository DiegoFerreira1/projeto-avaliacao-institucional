import mongoose from 'mongoose';

const AlunoSchema = new mongoose.Schema({
  cpf: String,
  matricula: String,
  nome: String,
  enderecoId: mongoose.Schema.Types.ObjectId,
  curso: String,
});

const Aluno = mongoose.model('Aluno', AlunoSchema);

export default Aluno;
