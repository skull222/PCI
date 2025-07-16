// api/guardar.js
const { Pool } = require('pg');

const pool = new Pool({
connectionString: process.env.DATABASE_URL,
ssl: { rejectUnauthorized: false },
});

module.exports = async (req, res) => {
if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
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
    fecha,
    reunion,
    persona
} = req.body;

try {
    const query = `
INSERT INTO formulario (
    nombre_completo, edad, ciudad, direccion, telefono,
    correo, recibir_celula, tiempo_asistencia, como_nos_conocio,
    oracion, fecha, reunion, persona
) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
`;

await pool.query(query, [
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
    fecha,
    reunion,
    persona
]);

    res.status(200).json({ mensaje: "Formulario guardado correctamente" });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
}
};
