const db = require('../db');

const alunoController = {
  getAllAlunos: (req, res) => {
    const sql = 'SELECT * FROM aluno';
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(result);
    });
  },

  createAluno: (req, res) => {
    const { matricula, nomeCompleto, cpf, enderecoId, numero, cursoId } = req.body;
    const sql = 'INSERT INTO aluno (matricula, nomeCompleto, cpf, enderecoId, numero, cursoId) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [matricula, nomeCompleto, cpf, enderecoId, numero, cursoId], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).send(result);
    });
  },

  updateAluno: (req, res) => {
    const { id } = req.params;
    const { matricula, nomeCompleto, cpf, enderecoId, numero, cursoId } = req.body;
    const sql = 'UPDATE aluno SET matricula = ?, nomeCompleto = ?, cpf = ?, enderecoId = ?, numero = ?, cursoId = ? WHERE id = ?';
    db.query(sql, [matricula, nomeCompleto, cpf, enderecoId, numero, cursoId, id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  deleteAluno: (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM aluno WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  }
};

module.exports = alunoController;
