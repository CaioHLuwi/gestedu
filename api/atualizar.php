<?php
error_reporting(0);

header('Access-Control-Allow-Origin:*'); // Autoriza todo tipo de acesso
header('Content-Type: application/json; charset=utf-8'); // Tipo Json
header('Access-Control-Allow-Method: PUT'); // Operação PUT do Crud
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X');

include('function.php');

$requestMethod = $_SERVER["REQUEST_METHOD"];

if($requestMethod == 'PUT') {

    $inputData = json_decode(file_get_contents("php://input"), true);
    if(empty($inputData)){
        
        $atualizaAluno = atualizaAluno($_POST, $_GET)                                                                                                                                    ($_POST, $_GET);
    } else {

        $atualizaAluno = atualizaAluno($inputData, $_GET);
    }

    echo $atualizaAluno;
    
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