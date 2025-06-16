const db = require('../config/db');

async function getAllEventos() {
  const result = await db.query('SELECT * FROM eventos ORDER BY data');
  return result.rows;
}

async function createEvento({ nome, data, descricao }) {
  const result = await db.query(
    'INSERT INTO eventos (nome, data, descricao) VALUES ($1, $2, $3) RETURNING *',
    [nome, data, descricao]
  );
  return result.rows[0];
}

async function deleteEvento(id) {
  await db.query('DELETE FROM eventos WHERE id = $1', [id]);
}

async function getEventoById(id) {
  const result = await db.query('SELECT * FROM eventos WHERE id = $1', [id]);
  return result.rows[0];
}

async function updateEvento(id, { nome, data, descricao }) {
  const result = await db.query(
    'UPDATE eventos SET nome = $1, data = $2, descricao = $3 WHERE id = $4 RETURNING *',
    [nome, data, descricao, id]
  );
  return result.rows[0];
}

module.exports = {
  getAllEventos,
  createEvento,
  deleteEvento,
  getEventoById,
  updateEvento
};


