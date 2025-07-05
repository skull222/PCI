CREATE DATABASE IF NOT EXISTS puerta_del_cielo;
USE puerta_del_cielo;

CREATE TABLE contactos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    direccion VARCHAR(150) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    recibir_celula VARCHAR(100) NOT NULL,
    tiempo_asistencia VARCHAR(100) NOT NULL,
    como_nos_conocio VARCHAR(150) NOT NULL,
    oracion TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
si