const mongoose = require('mongoose');

const enderecoSchema = new mongoose.Schema({
  rua: { type: String, required: true },
  numero: { type: String, required: true },
  cep: { type: String, required: true },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  pais: { type: String, required: true }
});

const Endereco = mongoose.model('Endereco', enderecoSchema);

module.exports = Endereco;
