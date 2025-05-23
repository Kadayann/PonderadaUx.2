    const express = require('express');
    const router = express.Router();
    const TarefaController = require('../controllers/tarefaController');

    // GET todas as tarefas
    router.get('/', TarefaController.listarTarefas);

    // POST nova tarefa
    router.post('/', TarefaController.criarTarefa);

    // PUT editar tarefa
    router.put('/:id', TarefaController.editarTarefa);

    // DELETE excluir tarefa
    router.delete('/:id', TarefaController.excluirTarefa);

    module.exports = router;
