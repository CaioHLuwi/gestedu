<?php
error_reporting(0);

header('Access-Control-Allow-Origin:*'); // Autoriza todo tipo de acesso
header('Content-Type: application/json; charset=utf-8'); // Tipo Json
header('Access-Control-Allow-Method: DELETE'); // Operação PUT do Crud
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X');

include('function.php');

$requestMethod = $_SERVER["REQUEST_METHOD"];

if($requestMethod == 'DELETE') {

    $deletaAluno = deletaAluno($_GET);
    echo $deletaAluno;

    
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