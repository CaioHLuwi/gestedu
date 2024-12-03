const cadastroForm = document.querySelector("form[name='cadastro']");

function salvaAluno(event) {
    event.preventDefault();

    const rmAluno = cadastroForm.rmAluno.value;
    const nomeAluno = cadastroForm.nomeAluno.value;
    const cpfAluno = cadastroForm.cpfAluno.value;
    const dataNascimentoAluno = cadastroForm.dataNascimentoAluno.value;
    const enderecoAluno = cadastroForm.enderecoAluno.value;
    const telefoneAluno = cadastroForm.telefoneAluno.value;
    const situacaoAluno = cadastroForm.situacaoAluno.value;

    if (!rmAluno || !nomeAluno || !cpfAluno || !dataNascimentoAluno || !enderecoAluno || !telefoneAluno || !situacaoAluno) {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
    };

    const URL = 'http://localhost/gest_edu/api/criar.php';
    fetch(URL, options)
        .then(resp => resp.json())
        .then(data => {
            mostrarResposta(data);
            atualizarTabela();
        })
        .catch(erro => {
            console.error(erro);
            location.reload();
        });
}

function mostrarResposta(dados) {
    if (dados.success) {
        alert("Dados incluídos com sucesso!");
    } else {
        alert("Erro ao incluir os dados: " + (dados.message || "Erro desconhecido."));
    }
}

function atualizarTabela() {
    fetch('http://localhost/gest_edu/api/listar.php')
        .then(resp => resp.json())
        .then(data => {
            const tabelaAlunos = document.getElementById('tabelaAlunos');
            tabelaAlunos.innerHTML = data.map(aluno => `
                <tr>
                    <td>${aluno.RM}</td>
                    <td>${aluno.Nome}</td>
                    <td>${aluno.CPF}</td>
                    <td>${aluno.DataNascimento}</td>
                    <td>${aluno.Endereco}</td>
                    <td>${aluno.Telefone}</td>
                    <td>${aluno.Situacao}</td>
                </tr>
            `).join('');
        })
        .catch(erro => console.log('Erro ao atualizar tabela:', erro));
}