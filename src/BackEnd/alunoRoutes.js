const express = require('express');
const router = express.Router();
const alunoController = require('./alunoController');

router.get('/alunos', alunoController.getAllAlunos);
router.post('/alunos', alunoController.createAluno);
router.put('/alunos/:id', alunoController.updateAluno);
router.delete('/alunos/:id', alunoController.deleteAluno);

module.exports = router;
