// /api/guardar.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
if (req.method !== 'POST') {
return res.status(405).end('Método no permitido');
}
const {
    nombre_completo,
    edad,
    ciudad,
    direccion,
    telefono,
    correo,
    recibir_celula,
    tiempo_asistencia,
    como_nos_conocio,
    oracion,
} = req.body;

try {
    const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
      ssl: { rejectUnauthorized: true }, // Importante para PlanetScale
    });

    const sql = `
    INSERT INTO contactos (
        nombre_completo, edad, ciudad, direccion, telefono, correo,
        recibir_celula, tiempo_asistencia, como_nos_conocio, oracion
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(sql, [
    nombre_completo, edad, ciudad, direccion, telefono, correo,
    recibir_celula, tiempo_asistencia, como_nos_conocio, oracion
    ]);

    res.status(200).json({ mensaje: 'Registro exitoso' });
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al guardar en la base de datos' });
}
}
