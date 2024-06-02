const db = require('../db');

const componenteController = {
  getAllComponentes: (req, res) => {
    const sql = 'SELECT * FROM componentecurricular'; 
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(result);
    });
  },

  createComponente: (req, res) => {
    const { componente, sigla, matrizCurricular, cargaHoraria, cursoId } = req.body;
    const sql = 'INSERT INTO componentecurricular (componente, sigla, matrizCurricular, cargaHoraria, cursoId) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [componente, sigla, matrizCurricular, cargaHoraria, cursoId], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).send(result);
    });
  },

  updateComponente: (req, res) => {
    const { id } = req.params;
    const { componente, sigla, matrizCurricular, cargaHoraria, cursoId } = req.body;
    const sql = 'UPDATE componentecurricular SET componente = ?, sigla = ?, matrizCurricular = ?, cargaHoraria = ?, cursoId = ? WHERE id = ?';
    db.query(sql, [componente, sigla, matrizCurricular, cargaHoraria, cursoId, id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  deleteComponente: (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM componentecurricular WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  }
};

module.exports = componenteController;
