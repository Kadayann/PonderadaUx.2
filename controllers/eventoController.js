const EventoModel = require('../models/eventoModel');

async function listarEventos(req, res) {
  try {
    const eventos = await EventoModel.getAllEventos();
    res.render('pages/eventos', { eventos });
  } catch (err) {
    console.error('Erro no listarEventos:', err);
    res.status(500).send('Erro ao listar eventos');
  }
}

async function criarEvento(req, res) {
  try {
    const { nome, data, descricao } = req.body;
    await EventoModel.createEvento({ nome, data, descricao });
    res.redirect('/eventos');  // redireciona após criar
  } catch (err) {
    console.error('Erro no criarEvento:', err);
    res.status(500).send('Erro ao criar evento');
  }
}

async function deletarEvento(req, res) {
  try {
    const { id } = req.params;
    console.log(`Recebi pedido para deletar evento ID: ${id}`);

    await EventoModel.deleteEvento(id);

    res.status(200).send('Evento excluído com sucesso');
  } catch (err) {
    console.error('Erro no deletarEvento:', err);
    res.status(500).send('Erro ao excluir evento');
  }
}

async function carregarEvento(req, res) {
  try {
    const { id } = req.params;
    const evento = await EventoModel.getEventoById(id);
    res.render('pages/editarEvento', { evento });
  } catch (err) {
    console.error('Erro no carregarEvento:', err);
    res.status(500).send('Erro ao carregar evento para edição');
  }
}

async function atualizarEvento(req, res) {
  try {
    const { id } = req.params;
    const { nome, data, descricao } = req.body;
    await EventoModel.updateEvento(id, { nome, data, descricao });
    res.redirect('/eventos');  // redireciona após atualizar
  } catch (err) {
    console.error('Erro no atualizarEvento:', err);
    res.status(500).send('Erro ao atualizar evento');
  }
}

module.exports = {
  listarEventos,
  criarEvento,
  deletarEvento,
  carregarEvento,
  atualizarEvento
};



