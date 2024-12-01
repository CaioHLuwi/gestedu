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

    let cabecalhos = ["RM", "Nome", "CPF", "Data de nascimento", "Endereço", "Telefone", "Situação"];

    function criaColuna(cabecalhoTexto){
        var th = document.createElement("th");
        th.classList.add('table-heading');
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
        tdRA.classList.add('table-item')
        tr.appendChild(tdRA);

        var tdNome = document.createElement("td");
        var textoNome = document.createTextNode(item.Nome);
        tdNome.appendChild(textoNome);
        tdNome.classList.add('table-item');
        tr.appendChild(tdNome);

        var tdCPF = document.createElement("td");
        var textoCPF = document.createTextNode(item.CPF);
        tdCPF.appendChild(textoCPF);
        tdCPF.classList.add('table-item');
        tr.appendChild(tdCPF);

        var tdDataNascimento = document.createElement("td");
        var textoDataNascimento = document.createTextNode(item.Telefone);
        tdDataNascimento.appendChild(textoDataNascimento);
        tdDataNascimento.classList.add('table-item');
        tr.appendChild(tdDataNascimento);   
        
        var tdEndereco = document.createElement("td");
        var textoEndereco = document.createTextNode(item.Endereco);
        tdEndereco.appendChild(textoEndereco);
        tdEndereco.classList.add('table-item');
        tr.appendChild(tdEndereco);  

        var tdTelefone = document.createElement("td");
        var textoTelefone = document.createTextNode(item.Telefone);
        tdTelefone.appendChild(textoTelefone);
        tdTelefone.classList.add('table-item');
        tr.appendChild(tdTelefone);  

        var tdSituacao = document.createElement("td");
        var textoSituacao = document.createTextNode(item.Situacao);
        tdSituacao.appendChild(textoSituacao);
        tr.appendChild(tdSituacao); 
        tdSituacao.classList.add('table-item')
        corpo.appendChild(tr);
        tr.classList.add('table-color');
    });  

    tabela.appendChild(corpo);            

    document.getElementById("tabelaAlunos").appendChild(tabela);
}