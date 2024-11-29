const formEditar = document.querySelector('form[name=alterar]');

function buscar(event,form) {
    event.preventDefault(); //para evitar o cancelamento de evento           
        const rmAluno = parseInt(formEditar.rmAluno.value);            
        if ( rmAluno != "" ) { //Codigo não pode ser null, pois através dele para buscar dados                    
                const URL = 'http://localhost/gest_edu/api/ler.php?RMAluno='+rmAluno;                    
                fetch( URL , {method: 'GET'} ) //usando protocolo "GET"                       
                    .then(resp => resp.json())                                    
                    .then(data => mostrarRespostaBuscar(rmAluno,data))                        
                    .catch(erro => console.log(erro));            
        }         
}       
//Criamos a função : mostrarRespostaBuscar(codigo,data)
function mostrarRespostaBuscar(codigo,data){
    console.log(data)
    if (codigo != data.information.RMAluno){
        alert("Sem registro com este código " + codigo + " !");
    }
    else {
        //alert("Dados buscados com sucesso !!"); 
        //pode ter ou não
        console.log(data) ;
        //colocando os dados buscados nos campos do formulário  
        formEditar.nomeAluno.value = data.information.Nome;
        formEditar.cpfAluno.value = data.information.CPF;
        formEditar.dataNascimentoAluno.value = data.information.DataNascimento;
        formEditar.enderecoAluno.value = data.information.Endereco;
        formEditar.telefoneAluno.value = data.information.Telefone;
        formEditar.situacaoAluno.value = data.information.Situacao;
    }         
}
//Criamos a função: alterar(event,this)
function Alterar(event, form) {
    event.preventDefault(); //para evitar o cancelamento do evento
    //As variáveis para armazenar os dados digitados por usuário
    const rmAluno = formEditar.rmAluno.value;
    const nomeAluno = formEditar.nomeAluno.value;
    const cpfAluno = formEditar.cpfAluno.value;
    const dataNascimentoAluno = formEditar.dataNascimentoAluno.value;
    const enderecoAluno = formEditar.enderecoAluno.value;
    const telefoneAluno = formEditar.telefoneAluno.value;
    const situacaoAluno = formEditar.situacaoAluno.value;

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
        method: 'PUT', //o método 'put' é para alterar os dados
        header: {'Content-Type':'application/json',},
        //O comando JSON.stringify(dados) converter o formato JSON para texto normal
        body: JSON.stringify(dados),
    };
    if (rmAluno != ""){
        const URL = 'http://localhost/gest_edu/api/atualizar.php?RMAluno='+ rmAluno; //endereço do api
        fetch(URL, options)
            .then(resp => resp.json())
            .then(data => mostrarRespostaAlterar(data))
            .catch(erro => console.log(erro));
    }            
}
//Criamos a função: mostrarRespostaAlterar(data)
function mostrarRespostaAlterar(data) {
    console.log(data); //pode ter ou não
    if (data.status == 200){
        alert("Dados alterados com sucesso !!!");                        
    }else{
        alert("Erro ao alterar os dados !!!");
    }
    //Limpar os campos no formulário
    formEditar.rmAluno.value = ""; 
    formEditar.nomeAluno.value = "";
    formEditar.cpfAluno.value = "";
    formEditar.dataNascimentoAluno.value = ""; 
    formEditar.enderecoAluno.value = "";    
    formEditar.telefoneAluno.value = "";    
    formEditar.situacaoAluno.value = "";             
}