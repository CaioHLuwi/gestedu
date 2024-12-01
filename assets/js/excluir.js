const formExcluir = document.querySelector("form[name=excluir]");

function excluirAluno(event) {
  formExcluir.rmAluno.value = "";

  console.log("teste");

//   event.preventDefault();
  const RM = parseInt(formExcluir.rmAluno.value);

  if (RM != "") {
    const URL = "http://localhost/gest_edu/api/deletar.php?RMAluno=" + RM;

    fetch(URL, { method: "DELETE" })
      .then((data) => mostrarRespostaDelete(data))
      .catch((erro) => console.log(erro));
  }
}

//Uma função para mostar uma mensagem e limpar os dados nos campos do formulário
function mostrarRespostaDelete(data) {
  if (data.status == 204) {
    alert("Dados excluído com sucesso!");
  } else {
    alert("Erro ao excluir!!!");
  }
  //limpar os dados nos campos do formulário
}
