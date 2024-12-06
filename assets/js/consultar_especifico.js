const dataContainer = document.querySelector('.data-container');
const dataSpan = document.createElement('span');
let formConsultar = document.querySelector('form[name=consultar]');

function consultarAluno(event, form){
    event.preventDefault();

    const codigo = parseInt(formConsultar.rmAluno.value);
   
    if ( codigo != "" ) {

            const URL = 'http://localhost/gest_edu/api/ler.php?RMAluno='+codigo;

            fetch( URL , {method: 'GET'} )                        
                .then(resp => resp.json())                                    
                .then(data => mostrarRespostaEspecifico(codigo,data))
                .catch(erro => console.log(erro));            
    }
}
function mostrarRespostaEspecifico(codigo,data){
    if (codigo != parseInt(data.information.RMAluno)){
        alert("Sem registro com este código : " + codigo + " !!");
    }
    else {
        dataContainer.innerHTML = '';

        let alunoNomeField = document.querySelector('#alunoNome');
        alunoNomeField.textContent = data.information.Nome;

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
            const divElement = document.createElement('div');

            spanElement.textContent = campo;

            spanElement.classList.add('data-span', 'info-alunos');

            divElement.classList.add('data-element');

            dataContainer.appendChild(divElement);

            divElement.appendChild(spanElement);

            dataContainer.appendChild(document.createElement('br'));

        });
    }         
}

