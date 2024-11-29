const cadastroForm = document.querySelector("form[name='cadastro']");

function salvar(event, form) { 
    event.preventDefault();

    const rmAluno = cadastroForm.rmAluno.value;
    const nomeAluno = cadastroForm.nomeAluno.value;
    const cpfAluno = cadastroForm.cpfAluno.value;
    const dataNascimentoAluno = cadastroForm.dataNascimentoAluno.value;
    const enderecoAluno = cadastroForm.enderecoAluno.value;
    const telefoneAluno = cadastroForm.telefoneAluno.value;
    const situacaoAluno = cadastroForm.situacaoAluno.value;

    const dados = {
        RMAluno: rmAluno,
        Nome: nomeAluno,
        CPF: cpfAluno,
        DataNascimento: dataNascimentoAluno,
        Endereco: enderecoAluno,
        Telefone: telefoneAluno,
        Situacao: situacaoAluno
    };

    const options = {
        method: 'POST',
        header: {'Content-Type':'application/json',},
        body: JSON.stringify(dados),
    };

    if (nomeAluno != ""){
        const URL = 'http://localhost/gest_edu/api/criar.php';
        fetch(URL, options)
            .then(resp => resp.json())
            .then(data => mostrarResposta(dados))
            .catch(erro => console.log(erro));
    }     
}

function mostrarResposta(dados) {
    if (dados.RMAluno != ''){
        alert("Dados incluidos com sucesso !!!");                        
    }else {
        alert("Erro ao incluir os dados !!!");
    }            
}