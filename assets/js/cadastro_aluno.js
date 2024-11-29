//Criamos a função: salvar(event, this)
const cadastroForm = document.querySelector("form[name='cadastro']");

function salvar(event, form) { 
    event.preventDefault(); //para evitar o cancelamento do evento
    //As variáveis para armazenar os dados digitados por usuário

    const rmAluno = cadastroForm.rmAluno.value;
    const nomeAluno = cadastroForm.nomeAluno.value;
    const cpfAluno = cadastroForm.cpfAluno.value;
    const dataNascimentoAluno = cadastroForm.dataNascimentoAluno.value;
    const enderecoAluno = cadastroForm.enderecoAluno.value;
    const telefoneAluno = cadastroForm.telefoneAluno.value;
    const situacaoAluno = cadastroForm.situacaoAluno.value;

    //Uma lista para armazenar o conjunto de dados obtidos em formato JSON
    const dados = {
        RMAluno: rmAluno,
        Nome: nomeAluno,
        CPF: cpfAluno,
        DataNascimento: dataNascimentoAluno,
        Endereco: enderecoAluno,
        Telefone: telefoneAluno,
        Situacao: situacaoAluno
    };
    //Uma lista para os dados de configuração
    const options = {
        method: 'POST', //o método 'post' é para enviar os dados
        header: {'Content-Type':'application/json',},
        //O comando JSON.stringify(dados) converter o formato JSON para texto normal
        body: JSON.stringify(dados),
    };
    if (nomeAluno != ""){
        const URL = 'http://localhost/gest_edu/api/criar.php'; //endereço do api
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