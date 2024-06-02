const db = require('../db');

const avaliacaoController = {
  getAllAvaliacoes: (req, res) => {
    const sql = 'SELECT * FROM avaliacao';
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(result);
    });
  },

  createAvaliacao: (req, res) => {
    const { periodoAvaliacao, categoriaId, componenteId, alunoId, conceitoProfessor, conceitoRecurso, conceitoRelevancia } = req.body;
    const sql = 'INSERT INTO avaliacao (periodoAvaliacao, categoriaId, componenteId, alunoId, conceitoProfessor, conceitoRecurso, conceitoRelevancia) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [periodoAvaliacao, categoriaId, componenteId, alunoId, conceitoProfessor, conceitoRecurso, conceitoRelevancia], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).send(result);
    });
  },

  updateAvaliacao: (req, res) => {
    const { id } = req.params;
    const { periodoAvaliacao, categoriaId, componenteId, alunoId, conceitoProfessor, conceitoRecurso, conceitoRelevancia } = req.body;
    const sql = 'UPDATE avaliacao SET periodoAvaliacao = ?, categoriaId = ?, componenteId = ?, alunoId = ?, conceitoProfessor = ?, conceitoRecurso = ?, conceitoRelevancia = ? WHERE id = ?';
    db.query(sql, [periodoAvaliacao, categoriaId, componenteId, alunoId, conceitoProfessor, conceitoRecurso, conceitoRelevancia, id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  deleteAvaliacao: (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM avaliacao WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  }
};

module.exports = avaliacaoController;
