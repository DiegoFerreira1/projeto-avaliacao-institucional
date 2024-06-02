const db = require('../db');

const enderecoController = {
  getAllEnderecos: (req, res) => {
    const sql = 'SELECT * FROM endereco';
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(result);
    });
  },

  createEndereco: (req, res) => {
    const { rua, cep, cidade, estado, pais } = req.body;
    const sql = 'INSERT INTO endereco (rua, cep, cidade, estado, pais) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [rua, cep, cidade, estado, pais], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).send(result);
    });
  },

  updateEndereco: (req, res) => {
    const { id } = req.params;
    const { rua, cep, cidade, estado, pais } = req.body;
    const sql = 'UPDATE endereco SET rua = ?, cep = ?, cidade = ?, estado = ?, pais = ? WHERE id = ?';
    db.query(sql, [rua, cep, cidade, estado, pais, id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  deleteEndereco: (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM endereco WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  }
};

module.exports = enderecoController;
