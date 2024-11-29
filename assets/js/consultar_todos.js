const URL = 'http://localhost/gest_edu/api/ler.php';          

fetch( URL , {method: 'GET'} )
    .then(resp => resp.json())                                    
    .then(data => mostrarResposta(data))
    .catch(erro => console.log(erro));         
   
function mostrarResposta(data){
    console.log(data) ;       
    if (data.status == "error"){
        alert("Sem regitros de alunos!!!");
    } else {
        criarTabela(data.information);
    }
}

function criarTabela(conteudo) {       

    var tabela = document.createElement("table");
    var cabecalho = document.createElement("thead");
    var corpo = document.createElement("tbody");

    var tr = document.createElement("tr");

    let cabecalhos = ["RM", "Nome", "CPF", "Data de nascimento", "Endereço", "Telefone", "Situação acadêmica"];

    function criaColuna(cabecalhoTexto){
        var th = document.createElement("th");
        th.textContent = cabecalhoTexto;
        return th;
    } 

    cabecalhos.forEach(cabecalho => {
        tr.appendChild(criaColuna(cabecalho))
    })

    cabecalho.appendChild(tr);


    tabela.appendChild(cabecalho);

    conteudo.forEach(item => {
        var tr = document.createElement("tr");

        var tdRA = document.createElement("td");
        var textoRA = document.createTextNode(item.RMAluno);
        textoRA.textContent = item.RMAluno;
        tdRA.appendChild(textoRA);
        tr.appendChild(tdRA);

        var tdNome = document.createElement("td");
        var textoNome = document.createTextNode(item.Nome);
        tdNome.appendChild(textoNome);
        tr.appendChild(tdNome);

        var tdCPF = document.createElement("td");
        var textoCPF = document.createTextNode(item.CPF);
        tdCPF.appendChild(textoCPF);
        tr.appendChild(tdCPF);

        var tdDataNascimento = document.createElement("td");
        var textoDataNascimento = document.createTextNode(item.Telefone);
        tdDataNascimento.appendChild(textoDataNascimento);
        tr.appendChild(tdDataNascimento);   
        
        var tdEndereco = document.createElement("td");
        var textoEndereco = document.createTextNode(item.Endereco);
        tdEndereco.appendChild(textoEndereco);
        tr.appendChild(tdEndereco);  

        var tdTelefone = document.createElement("td");
        var textoTelefone = document.createTextNode(item.Telefone);
        tdTelefone.appendChild(textoTelefone);
        tr.appendChild(tdTelefone);  

        var tdSituacao = document.createElement("td");
        var textoSituacao = document.createTextNode(item.Situacao);
        tdSituacao.appendChild(textoSituacao);
        tr.appendChild(tdSituacao); 

        corpo.appendChild(tr);
    });  
    tabela.appendChild(corpo);            

    document.getElementById("tabelaAlunos").appendChild(tabela);
}