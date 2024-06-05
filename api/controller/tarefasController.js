const Task = require('../models/tarefas');

exports.createTask = async (req, res) => {
  try {
    const {titulo, descricao,prioridade, data, categoria} = req.body;
    const newTask = await Task.create({titulo, descricao,prioridade, data, categoria });
    res.status(201).json({ success: true, message: 'Tarefa criada com sucesso', task: newTask });
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    res.status(500).json({ success: false, error: 'Erro interno do servidor' });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json({ tasks });
  } catch (error) {
    console.error('Erro ao obter tarefas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};



exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = req.body;

    const [updatedCount, updatedTasks] = await Task.update(updatedTask, { where: { id: taskId }, returning: true });

    if (updatedCount === 0 || !updatedTasks) {
      return res.status(404).json({ success: false, message: 'Tarefa não encontrada' });
    }

    res.json({ success: true, message: 'Tarefa atualizada com sucesso', task: updatedTasks[0] });
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    res.status(500).json({ success: false, error: 'Erro interno do servidor' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedCount = await Task.destroy({ where: { id: taskId } });

    if (deletedCount === 0) {
      return res.status(404).json({ success: false, message: 'Tarefa não encontrada' });
    }

    res.json({ success: true, message: 'Tarefa deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
    res.status(500).json({ success: false, error: 'Erro interno do servidor' });
  }
};
