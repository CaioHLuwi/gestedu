async function excluirAluno(event) {
  const formExcluir = document.querySelector("form[name=excluir]");
  const RM = parseInt(formExcluir.rmAluno.value);

  if (RM != "") {
    const URL = "http://localhost/gest_edu/api/deletar.php?RMAluno=" + RM;
     await fetch(URL, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => response.json())
    .then(data => mostrarRespostaDelete(data))
    .then(location.reload())
    .catch((erro) => console.log(erro));

  }
}

//Uma função para mostar uma mensagem e limpar os dados nos campos do formulário
function mostrarRespostaDelete(data) {
  if (data.status === 204) {
    alert("Dados excluído com sucesso!");
  } else {
    alert("Erro ao excluir!!!");
  }
  //limpar os dados nos campos do formulário
}
