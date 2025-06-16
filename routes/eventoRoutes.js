const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

router.get('/eventos', eventoController.listarEventos);

router.get('/eventos/novo', (req, res) => {
  res.render('pages/novoEvento'); // Garante a tela do formulário
});

router.post('/api/eventos', eventoController.criarEvento);

router.delete('/api/eventos/:id', eventoController.deletarEvento);

router.get('/eventos/editar/:id', eventoController.carregarEvento);

router.put('/api/eventos/:id', eventoController.atualizarEvento);

module.exports = router;

