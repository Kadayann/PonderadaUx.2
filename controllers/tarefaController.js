const pool = require('../config/db');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  const { nome, descricao } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO tarefas (nome, descricao) VALUES ($1, $2) RETURNING *',
      [nome, descricao]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tarefas');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar uma tarefa
exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, status } = req.body;

  try {
    const result = await pool.query(
      'UPDATE tarefas SET nome = $1, descricao = $2, status = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
      [nome, descricao, status, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM tarefas WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

