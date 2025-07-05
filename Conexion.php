<?php
$host = "localhost";
$usuario = "root";
$contrasena = "";
$basededatos = "puerta_del_cielo";

// Crear conexión
$conn = new mysqli($host, $usuario, $contrasena, $basededatos);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
