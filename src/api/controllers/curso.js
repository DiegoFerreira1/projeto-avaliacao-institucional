const db = require('../db');

const cursoController = {
  getAllCursos: (req, res) => {
    const sql = 'SELECT * FROM curso';
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(result);
    });
  },

  createCurso: (req, res) => {
    const { descricao } = req.body;
    const sql = 'INSERT INTO curso (descricao) VALUES (?)';
    db.query(sql, [descricao], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).send(result);
    });
  },

  updateCurso: (req, res) => {
    const { id } = req.params;
    const { descricao } = req.body;
    const sql = 'UPDATE curso SET descricao = ? WHERE id = ?';
    db.query(sql, [descricao, id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  deleteCurso: (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM curso WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  }
};

module.exports = cursoController;
