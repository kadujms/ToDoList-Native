const express = require('express');
const mongoose = require('mongoose');
const taskController = require('./controller/tarefasController');
const cors = require('cors')
require('./db')
require('dotenv').config()


const app = express();
const port = 4000;

app.use(cors({ origin: '*' }));
app.use(express.json());


// Rotas
app.post('/task', taskController.createTask);
app.get('/tasks', taskController.getAllTasks);
app.put('/tasks/:id', taskController.updateTask);
app.delete('/tasks/:id', taskController.deleteTask);
// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
