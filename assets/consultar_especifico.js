const dataContainer = document.querySelector('.data-container');
const dataSpan = document.createElement('span');

//Criamos uma função (subprograma) para buscar os dados no BD (xampp-MySQL)
function buscar(event, form){
    //Este comando é para prevenir o cancelamento de evento: evento de click->buscar os dados
    event.preventDefault();
    //variável ra é um número inteiro. parseInt(...) converter texto para inteiro
    const codigo = parseInt(document.Consultar.rmAluno.value);
   
    if ( codigo != "" ) { //RA não pode ser null, pois através dele para buscar dados
            //Endereço do api que construimos
            const URL = 'http://localhost/gest_edu/api/ler.php?RMAluno='+codigo;
            //fetch(URL , options)
            fetch( URL , {method: 'GET'} )                        
                /*Uma Arrow function é exatamente como uma função/callback normal */ 
                //para transformar a resposta de texto puro para JSON  
                .then(resp => resp.json())                                    
                .then(data => mostrarResposta(codigo,data))
                //Além disso podemos utilizar o método catch() para tratar erros.
                //e a mensagem de erros estará console
                .catch(erro => console.log(erro));            
    }
}
//Uma função para mostar uma mensagem e os dados buscados
function mostrarResposta(codigo,data){
    if (codigo != parseInt(data.information.RMAluno)){
        alert("Sem registro com este código : " + codigo + " !!");
    }
    else {
        dataContainer.innerHTML = ''; // Limpa o conteúdo do container

        const campos = [
            `RM: ${data.information.RMAluno}`,
            `Nome Completo: ${data.information.Nome}`,
            `CPF: ${data.information.CPF}`,
            `Data de nascimento: ${data.information.DataNascimento}`,
            `Endereço: ${data.information.Endereco}`,
            `Telefone: ${data.information.Telefone}`,
            `Situação na matéria: ${data.information.Situacao}`
        ]

        campos.forEach(campo => {
            const spanElement = document.createElement('span');

            spanElement.textContent = campo; // Recebe o valor de cada um dos campos, como por exemplo "RM: ${data.information.RMAluno}"

            spanElement.classList.add('data-span'); // Adiciona uma classe para estilizar mais para a frente

            dataContainer.appendChild(spanElement); // Adiciona o span na div data-container

            dataContainer.appendChild(document.createElement('br')); // No final de cada um dos Spans adiciona um BR

        });
        // document.Consultar.txtNome.value = data.information.CPF;
        // document.Consultar.txtEmail.value = data.information.DataNascimento;
        // document.Consultar.txtTelefone.value = data.information.telefone; 
    }         
}