const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const cursosRouter = require('./routes/curso');
const componentesRouter = require('./routes/componente'); 
const enderecosRouter = require('./routes/endereco');
const alunosRouter = require('./routes/aluno');
const avaliacaoRouter = require("./routes/avaliacao");
const categoriasRouter = require("./routes/categoria"); 

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.use('/cursos', cursosRouter); 
app.use('/componentes', componentesRouter);
app.use('/enderecos', enderecosRouter);
app.use('/alunos', alunosRouter);
app.use("/avaliacoes", avaliacaoRouter);
app.use("/categorias", categoriasRouter); 

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
