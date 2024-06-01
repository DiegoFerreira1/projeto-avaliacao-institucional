const Endereco = require('./enderecoModel');

const getAllEnderecos = async (req, res) => {
  try {
    const enderecos = await Endereco.find();
    res.json(enderecos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEndereco = async (req, res) => {
  const { rua, numero, cep, cidade, estado, pais } = req.body;
  const endereco = new Endereco({ rua, numero, cep, cidade, estado, pais });
  try {
    const newEndereco = await endereco.save();
    res.status(201).json(newEndereco);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateEndereco = async (req, res) => {
  const { id } = req.params;
  const { rua, numero, cep, cidade, estado, pais } = req.body;
  try {
    const updatedEndereco = await Endereco.findByIdAndUpdate(id, { rua, numero, cep, cidade, estado, pais }, { new: true });
    res.json(updatedEndereco);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteEndereco = async (req, res) => {
  const { id } = req.params;
  try {
    await Endereco.findByIdAndDelete(id);
    res.json({ message: 'Endereço deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEnderecos,
  createEndereco,
  updateEndereco,
  deleteEndereco,
};
