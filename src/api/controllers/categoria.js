const db = require('../db');

const categoriaController = {
  getAllCategorias: (req, res) => {
    const sql = 'SELECT * FROM categoriaavaliacao'; 
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(result);
    });
  },

  createCategoria: (req, res) => {
    const { categoria, descricao } = req.body;
    const sql = 'INSERT INTO categoriaavaliacao (categoria, descricao) VALUES (?, ?)';
    db.query(sql, [categoria, descricao], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).send(result);
    });
  },

  updateCategoria: (req, res) => {
    const { id } = req.params;
    const { categoria, descricao } = req.body;
    const sql = 'UPDATE categoriaavaliacao SET categoria = ?, descricao = ? WHERE id = ?';
    db.query(sql, [categoria, descricao, id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  deleteCategoria: (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM categoriaavaliacao WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  }
};

module.exports = categoriaController;
