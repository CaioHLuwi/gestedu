<?php

require '../inc/config.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Access-Control-Allow-Origin:*'); // Autoriza todo tipo de acesso
header('Content-Type: application/json; charset=utf-8'); // Tipo Json
header('Access-Control-Allow-Method: POST'); // Operação POST do Crud
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X');

include('function.php');

$pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$requestMethod = $_SERVER["REQUEST_METHOD"];

global $conn;

    try{
        $data = json_decode(file_get_contents("php://input"), true);
        $login = $data['login'] ?? '';
        $senha = $data['senha'] ?? '';

        $stmt = $pdo->prepare("SELECT * FROM universidades WHERE login = :login AND senha = :senha");
        $stmt->execute(['login' => $login, 'senha' => $senha]);

        $data = json_decode(file_get_contents("php://input", true));

        $login = $data->login ?? '';
        $senha = $data->senha ?? '';

        if($stmt->rowCount() > 0){
            $userData = $stmt->fetch(PDO::FETCH_ASSOC);

            echo json_encode([
                "status" => 200, 
                "message" => "Usuário válido",
                "information" => [
                    "perfil" => $userData['perfil'],
                ]
            ]);
            exit;
        } else { 
            echo json_encode(["status" => 401, "message" => "Usuário ou senha inválidos"]);
        }
    } catch (PDOException $e) {
        error_log("Erro no banco de dados: " . $e->getMessage());
        echo json_encode(["status" => 500, "error" => $e.getMessage()]);
    }

?>