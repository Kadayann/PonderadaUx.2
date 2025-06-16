async function deletarEvento(id) {
  const confirmar = confirm('Tem certeza que deseja excluir este evento?');
  if (!confirmar) return;

  try {
    const resposta = await fetch(`/api/eventos/${id}`, {
      method: 'DELETE'
    });

    if (resposta.ok) {
      alert('Evento excluído com sucesso!');
      location.reload();
    } else {
      alert('Erro ao excluir evento.');
    }
  } catch (erro) {
    console.error(erro);
    alert('Erro na requisição.');
  }
}
