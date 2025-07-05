<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include 'conexion.php';

    // Captura de datos del formulario
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $ciudad = $_POST['ciudad'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $recibir_celula = $_POST['recibir_celula'];
    $tiempo_asistencia = $_POST['tiempo_asistencia'];
    $como_nos_conocio = $_POST['como_nos_conocio'];
    $oracion = $_POST['oracion'];

    $sql = "INSERT INTO contactos (nombre_completo, edad, ciudad, direccion, telefono, correo, recibir_celula, tiempo_asistencia, como_nos_conocio, oracion)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sissssssss", $nombre, $edad, $ciudad, $direccion, $telefono, $correo, $recibir_celula, $tiempo_asistencia, $como_nos_conocio, $oracion);

    if ($stmt->execute()) {
        header("Location: Despedida.html"); // redirige al terminar
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
