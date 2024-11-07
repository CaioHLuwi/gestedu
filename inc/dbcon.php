<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "gestedu";

$conn = mysqli_connect($host, $username, $password, $dbname);

if(!$conn){

    die("Conexão falhou: " . mysqli_connect_error());
} else {
    
}

?>