<?php

header('Access-Control-Allow-Origin:*'); // Autoriza todo tipo de acesso
header('Content-Type: application/json; charset=utf-8'); // Tipo Json
header('Access-Control-Allow-Method: GET'); // Operação GET do Crud
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X');


include('function.php');

$requestMethod = $_SERVER["REQUEST_METHOD"];

if($requestMethod == "GET"){

    if(isset($_GET['RMAluno'])){

        $aluno = getAluno($_GET);
        echo $aluno;
    }else {
        $listaAlunos = getAlunoList();
        echo $listaAlunos;
    }
}
else
{
    $dados = [
        'status' => 405,
        'message' => $requestMethod. ' Method Not Allowed',
    ];
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode($dados);
}

?>