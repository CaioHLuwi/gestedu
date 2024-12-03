const formEditar = document.querySelector('form[name=alterar]');

function buscar(event,form) {
    event.preventDefault();        
        const rmAluno = parseInt(formEditar.rmAluno.value);            
        if ( rmAluno != "" ) {             
                const URL = 'http://localhost/gest_edu/api/ler.php?RMAluno='+rmAluno;                    
                fetch( URL , {method: 'GET'} )                 
                    .then(resp => resp.json())                                    
                    .then(data => mostrarRespostaBuscar(rmAluno,data))                        
                    .catch(erro => console.log(erro));            
        }         
}       

function mostrarRespostaBuscar(codigo,data){
    if (codigo != data.information.RMAluno){
        alert("Sem registro com este código " + codigo + " !");
    }
    else {
        formEditar.nomeAluno.value = data.information.Nome;
        formEditar.cpfAluno.value = data.information.CPF;
        formEditar.dataNascimentoAluno.value = data.information.DataNascimento;
        formEditar.enderecoAluno.value = data.information.Endereco;
        formEditar.telefoneAluno.value = data.information.Telefone;
        formEditar.situacaoAluno.value = data.information.Situacao;
    }         
}
function alterarAluno(event, form) {

    const rmAluno = formEditar.rmAluno.value;
    const nomeAluno = formEditar.nomeAluno.value;
    const cpfAluno = formEditar.cpfAluno.value;
    const dataNascimentoAluno = formEditar.dataNascimentoAluno.value;
    const enderecoAluno = formEditar.enderecoAluno.value;
    const telefoneAluno = formEditar.telefoneAluno.value;
    const situacaoAluno = formEditar.situacaoAluno.value;

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
        method: 'PUT',
        header: {'Content-Type':'application/json',},
        body: JSON.stringify(dados),
    };

    if (rmAluno != ""){
        const URL = 'http://localhost/gest_edu/api/atualizar.php?RMAluno='+ rmAluno;
        fetch(URL, options)
            .then(resp => resp.json())
            .then(data => mostrarRespostaAlterar(data))
            .catch(erro => console.log(erro));
    }            
}

function mostrarRespostaAlterar(data) {
    console.log(data);
    if (data.status == 200){
        console.log("Dados alterados com sucesso !!!");   
        location.reload();                     
    }else{
        console.log("Erro ao alterar os dados !!!");
    }          
}