const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/aluno');

router.post('/', alunoController.createAluno);
router.get('/', alunoController.getAllAlunos);
router.put('/:id', alunoController.updateAluno);
router.delete('/:id', alunoController.deleteAluno);

module.exports = router;
