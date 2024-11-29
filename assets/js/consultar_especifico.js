const dataContainer = document.querySelector('.data-container');
const dataSpan = document.createElement('span');

function buscar(event, form){
    event.preventDefault();

    const codigo = parseInt(document.consultar.rmAluno.value);
   
    if ( codigo != "" ) {

            const URL = 'http://localhost/gest_edu/api/ler.php?RMAluno='+codigo;

            fetch( URL , {method: 'GET'} )                        
                .then(resp => resp.json())                                    
                .then(data => mostrarResposta(codigo,data))
                .catch(erro => console.log(erro));            
    }
}
function mostrarResposta(codigo,data){
    if (codigo != parseInt(data.information.RMAluno)){
        alert("Sem registro com este código : " + codigo + " !!");
    }
    else {
        dataContainer.innerHTML = '';

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

            spanElement.textContent = campo;

            spanElement.classList.add('data-span');

            dataContainer.appendChild(spanElement);

            dataContainer.appendChild(document.createElement('br'));

        });
    }         
}

