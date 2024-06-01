const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const alunoRoutes = require('./BackEnd/alunoRoutes');
const enderecoRoutes = require('./BackEnd/enderecoRoutes');
const port = 3001;

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/api', alunoRoutes);
app.use('/api', enderecoRoutes);
// app.use('/alunos', alunoController);
// app.use('/enderecos', enderecoController);

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://usuarios:qIOU79Wkswm7NrSs@recomendacao-api.w8qabb7.mongodb.net/?retryWrites=true&w=majority&appName=recomendacao-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
  console.error('Erro de conexão com o MongoDB:', err);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
