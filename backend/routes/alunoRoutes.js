import express from 'express';
import { getAllAlunos, createAluno, updateAluno, deleteAluno } from '../controllers/alunoController.js';

const router = express.Router();

router.get('/', getAllAlunos); // Rota para buscar todos os alunos
router.post('/', createAluno); // Rota para criar um novo aluno
router.put('/:id', updateAluno); // Rota para atualizar os dados de um aluno pelo ID
router.delete('/:id', deleteAluno); // Rota para deletar um aluno pelo ID

export default router;
