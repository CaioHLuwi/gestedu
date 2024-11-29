//Endereço do api que construimos
const URL = 'http://localhost/gest_edu/api/ler.php';          
//fetch(URL , options)
/* Fetch API comes with a fetch () method that allows you to fetch data from all sorts of different 
   places and work with the data fetched. It allows you to make an HTTP request, 
   i.e., either a GET request (for getting data) or POST request (for posting data).*/
fetch( URL , {method: 'GET'} ) //Método 'GET'
    //para transformar a resposta de texto puro para JSON
    /*Uma Arrow function é exatamente como uma função/callback normal */   
    .then(resp => resp.json())                                    
    .then(data => mostrarResposta(data))
    //Além disso podemos utilizar o método catch() para tratar erros.
    //e a mensagem de erros estará console
    .catch(erro => console.log(erro));         
   
//Criamos uma função (um subprograma) para mostar uma mensagem ou chamar outra função criarTabela(...)
function mostrarResposta(data){
    console.log(data) ;       
    if (data.status == "error"){//ver o arquivo index.php do api que construimos
        alert("Sem regitros de alunos!!!");
    } else {
        //chamar outra função criarTabela(...) com informação (parâmetro): data.information
        criarTabela(data.information);
    }
}
//Criamos uma função (um subprograma) para criar uma tabela que mostrará todos os dados: 
function criarTabela(conteudo) {
    //Elementos da tabela em HTMl: Uma estrutura de uma tabela           

    var tabela = document.createElement("table");
    var cabecalho = document.createElement("thead");
    var corpo = document.createElement("tbody");

    //Montar Cabeçalho da tabela
    // Criamos uma linha:
    var tr = document.createElement("tr");

    // Declara todos os atributos disponíveis
    let cabecalhos = ["RM", "Nome", "CPF", "Data de nascimento", "Endereço", "Telefone", "Situação acadêmica"];

    function criaColuna(cabecalhoTexto){
        var th = document.createElement("th");
        th.textContent = cabecalhoTexto;
        return th;
    } 

    // Cria uma coluna para cada um dos cabeçalhos
    cabecalhos.forEach(cabecalho => {
        tr.appendChild(criaColuna(cabecalho))
    })

    //adicionar a linha no cabecalho
    cabecalho.appendChild(tr);

    //adicionar cabecalho na tabela
    tabela.appendChild(cabecalho);

    // var thRA = document.createElement("th");
    // var thNome = document.createElement("th");
    // var thEmail = document.createElement("th");
    // var thTelefone = document.createElement("th");
    // var thEndereco = document.createElement("th");
   
    // //Adicionar os campos da coluna na linha do cabecalho
    // thRA.appendChild( document.createTextNode("RA") ) ;
    // tr.appendChild(thRA);           

    // thNome.appendChild( document.createTextNode("Nome") ) ;
    // tr.appendChild(thNome);

    // thEmail.appendChild( document.createTextNode("Email") ) ;
    // tr.appendChild(thEmail);   
    
    // thEmail.appendChild( document.createTextNode("Email") ) ;
    // tr.appendChild(thEmail);   
    
    // thTelefone.appendChild( document.createTextNode("Telefone") ) ;
    // tr.appendChild(thTelefone);

    //FIM Cabeçalho da tabela

    /*Conteudo da tabela: O método .forEach(...) pegar cada registro no BD que é transformado 
    em formato JSON. O método forEach() executa uma dada função em cada elemento de um array.*/

    conteudo.forEach(item => {
        //Criar uma linha
        var tr = document.createElement("tr");
        //Regisro RA:
        var tdRA = document.createElement("td");
        var textoRA = document.createTextNode(item.RMAluno);
        textoRA.textContent = item.RMAluno;
        tdRA.appendChild(textoRA);
        tr.appendChild(tdRA);
        //Registro NOME:
        var tdNome = document.createElement("td");
        var textoNome = document.createTextNode(item.Nome);
        tdNome.appendChild(textoNome);
        tr.appendChild(tdNome);
        //Registro EMAIL:
        var tdCPF = document.createElement("td");
        var textoCPF = document.createTextNode(item.CPF);
        tdCPF.appendChild(textoCPF);
        tr.appendChild(tdCPF);
        //Registro TELEFONE:
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
        
        //Anexar os campos no corpo da tabela
        corpo.appendChild(tr);
    });  
    //Adicionar corpo na tabela e fim do 
    tabela.appendChild(corpo);            

    //Adicionar a tabela no container div e exibe na tela
    document.getElementById("tabelaAlunos").appendChild(tabela);
}