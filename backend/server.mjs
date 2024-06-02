import express from 'express';
import connectDB from './db.js';
import alunoRoutes from './routes/alunoRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/api/alunos', async (req, res) => {
  try {
    const alunos = await apiService.getAllAlunos();
    res.json(alunos);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

app.post('/api/alunos', async (req, res) => {
  try {
    const aluno = await apiService.createAluno(req.body);
    res.json(aluno);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

app.put('/api/alunos/:id', async (req, res) => {
  try {
    const aluno = await apiService.updateAluno(req.params.id, req.body);
    res.json(aluno);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

app.delete('/api/alunos/:id', async (req, res) => {
  try {
    await apiService.deleteAluno(req.params.id);
    res.json({ message: 'Aluno deletado com sucesso' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

app.get('/api/enderecos', async (req, res) => {
  try {
    const enderecos = await apiService.getAllEnderecos();
    res.json(enderecos);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
