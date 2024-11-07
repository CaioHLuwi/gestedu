<?php

require '../inc/dbcon.php';

function erro422($mensagem){
    
    $dados = [
        'status' => 422,
        'message' => $mensagem,
    ];
    header("HTTP/1.0 422 Unprocessable Content");
    echo json_encode($dados);
    exit();
}

function criaAluno($alunoInput){ // Cria aluno usando método POST do Insomnia colocando no formato de tabela todos os dados do banco de dados RMAluno, Nome,  CPF, DataNascimento, Endereco, Telefone, Situacao http://localhost/gest_edu/alunos/criar.php
    
    global $conn;

    $rm = mysqli_real_escape_string($conn, $alunoInput['RMAluno']);
    $nome = mysqli_real_escape_string($conn, $alunoInput['Nome']);
    $cpf = mysqli_real_escape_string($conn, $alunoInput['CPF']);
    $dataNascimento = mysqli_real_escape_string($conn, $alunoInput['DataNascimento']);
    $endereco = mysqli_real_escape_string($conn, $alunoInput['Endereco']);
    $telefone = mysqli_real_escape_string($conn, $alunoInput['Telefone']);
    $situacao = mysqli_real_escape_string($conn, $alunoInput['Situacao']);

    if(empty(trim($rm))){

        return erro422('Digite o RM do aluno:');
    } elseif(empty(trim($nome))){

        return erro422('Digite o nome do aluno:');
    }elseif(empty(trim($cpf))){

        return erro422('Digite o CPF do aluno:');
    }elseif(empty(trim($dataNascimento))){

        return erro422('Digite a data de nascimento do aluno:');
    }elseif(empty(trim($endereco))){

        return erro422('Digite o endereço do aluno [Av. das flores, 152, CECAP - Guarulhos]:');
    }elseif(empty(trim($telefone))){

        return erro422('Digite o telefone do aluno [(11) 948468684]:');
    }
    elseif(empty(trim($situacao))){

        return erro422('Digite a situação atual do aluno [Aprovado ou Reprovado]');
    }
    else
    {
        $query = "INSERT INTO alunos (RMAluno, Nome, CPF, DataNascimento, Endereco, Telefone, Situacao) VALUES ('$rm', '$nome', '$cpf', '$dataNascimento', '$endereco', '$telefone', '$situacao')";
        $query_run = mysqli_query($conn, $query);

        if($query_run){
            
            $dados = [
                'status' => 201,
                'message' => 'Aluno criado com sucesso.',
            ];
            header("HTTP/1.0 201 Created");
            return json_encode($dados);

        }else{

            $dados = [
                'status' => 404,
                'message' => 'Nenhum aluno encontrado.',
            ];
            header("HTTP/1.0 404 Nenhum aluno encontrado");
            return json_encode($dados);
        }
    }


}

function getAlunoList(){ // Lista todos os alunos usando o método GET do Insomnnia através da URL http://localhost/gest_edu/alunos/ler.php
    
    global $conn;

    $query = "SELECT * FROM alunos";
    $query_run = mysqli_query($conn, $query);

    if($query_run){

        if(mysqli_num_rows($query_run) > 0){

            $resposta = mysqli_fetch_all($query_run, MYSQLI_ASSOC);

            $dados = [
                'status' => 200,
                'message' => 'Lista De Alunos Encontrada Com Sucesso!',
                'information' => $resposta
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($dados);

        } else {
            $dados = [
                'status' => 404,
                'message' => 'Nenhum aluno encontrado.',
            ];
            header("HTTP/1.0 404 Nenhum aluno encontrado");
            return json_encode($dados);
        }

    }
    else
    {
        $dados = [
            'status' => 500,
            'message' => 'Internal Server Error',
        ];
        header("HTTP/1.0 405 Internal Server Error");
        return json_encode($dados);
    }
}

function getAluno($alunoParametros){ // Pega aluno especifico usando o metodo GET atráves do http://localhost/gest_edu/alunos/ler.php?RMAluno=numerodorm

    global $conn;

    if($alunoParametros['RMAluno'] == null){
        
        return erro422('Digite o RM do aluno:');
    }

    $alunoRm = mysqli_real_escape_string($conn, $alunoParametros['RMAluno']);

    $query = "SELECT * FROM alunos WHERE RMAluno = '$alunoRm' LIMIT 1";
    $resultado = mysqli_query($conn, $query);

    if($resultado){

        if(mysqli_num_rows($resultado) == 1){
            $res = mysqli_fetch_assoc($resultado);

            $dados = [
                'status' => 200,
                'message' => 'Alunos encontrado com sucesso!',
                'information' => $res
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($dados);
        } else {
            $dados = [
                'status' => 404,
                'message' => 'Nenhum Aluno Encontrado',
            ];
            header("HTTP/1.0 404 Not Found");
            return json_encode($dados);
        }

    } else {
        $dados = [
            'status' => 500,
            'message' => 'Internal Server Error',
        ];
        header("HTTP/1.0 405 Internal Server Error");
        return json_encode($dados);
    }
}

function atualizaAluno($alunoInput, $alunoParametros){ // Atualiza aluno especifico usando o metodo PUT atráves do http://localhost/gest_edu/alunos/atualizar.php?RMAluno=numerodorm e em seguida um JSON com todos os dados novos.
    
    global $conn;

    if(!isset($alunoParametros['RMAluno'])){

        return erro422('RM do Aluno não encontrado na URL.');
    } elseif($alunoParametros['RMAluno'] == null){

        return erro422('Digite o RM do aluno.');
    }

    $rmAlunoEdit = mysqli_real_escape_string($conn, $alunoParametros['RMAluno']);

    $rm = mysqli_real_escape_string($conn, $alunoInput['RMAluno']);
    $nome = mysqli_real_escape_string($conn, $alunoInput['Nome']);
    $cpf = mysqli_real_escape_string($conn, $alunoInput['CPF']);
    $dataNascimento = mysqli_real_escape_string($conn, $alunoInput['DataNascimento']);
    $endereco = mysqli_real_escape_string($conn, $alunoInput['Endereco']);
    $telefone = mysqli_real_escape_string($conn, $alunoInput['Telefone']);
    $situacao = mysqli_real_escape_string($conn, $alunoInput['Situacao']);

    if(empty(trim($rm))){

        return erro422('Digite os novos dados do aluno.');
    } elseif(empty(trim($nome))){

        return erro422('Digite o nome do aluno:');
    }elseif(empty(trim($cpf))){

        return erro422('Digite o CPF do aluno:');
    }elseif(empty(trim($dataNascimento))){

        return erro422('Digite a data de nascimento do aluno:');
    }elseif(empty(trim($endereco))){

        return erro422('Digite o endereço do aluno [Av. das flores, 152, CECAP - Guarulhos]:');
    }elseif(empty(trim($telefone))){

        return erro422('Digite o telefone do aluno [(11) 948468684]:');
    }
    elseif(empty(trim($situacao))){

        return erro422('Digite a situação atual do aluno [Aprovado ou Reprovado]');
    }
    else
    {
        $query = "UPDATE alunos SET RMAluno='$rm', Nome='$nome', CPF='$cpf', DataNascimento='$dataNascimento', Endereco='$endereco', Telefone='$telefone',Situacao='$situacao' WHERE RMAluno='$rmAlunoEdit' LIMIT 1";
        $resultado = mysqli_query($conn, $query);

        if($resultado){
            
            $dados = [
                'status' => 200,
                'message' => 'Aluno atualizado com sucesso.',
            ];
            header("HTTP/1.0 200 Success");
            return json_encode($dados);

        }else{

            $dados = [
                'status' => 404,
                'message' => 'Nenhum aluno encontrado.',
            ];
            header("HTTP/1.0 404 Nenhum aluno encontrado");
            return json_encode($dados);
        }
    }


}

function deletaAluno($alunoParametros){

    global $conn;

    if(!isset($alunoParametros['RMAluno'])){

        return erro422('RM do Aluno não encontrado na URL.');
    } elseif($alunoParametros['RMAluno'] == null){

        return erro422('Digite o RM do aluno.');
    }

    $rmAluno = mysqli_real_escape_string($conn, $alunoParametros['RMAluno']);

    $query = "DELETE FROM alunos WHERE RMAluno='$rmAluno' LIMIT 1";

    $result = mysqli_query($conn, $query);

    if($result){

        $dados = [
            'status' => 204,
            'message' => 'Aluno Deletado com Sucesso.',
        ];
        header("HTTP/1.0 204 Deleted");
        return json_encode($dados);

    } else {
        $dados = [
            'status' => 404,
            'message' => 'Aluno não encontrado',
        ];
        header("HTTP/1.0 404 Not Found");
        return json_encode($dados);
    }
}

?>