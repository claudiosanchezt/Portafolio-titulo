// Objetivo: Controlador para el login de la aplicación
const database = require('./../database/database');
const jwt = require('./../utils/jsonwebtoken');
const { httpError } = require('../utils/error');
// Función para validar el login
const login = async (req, res) => {
    try {
        // Obtener los datos del cuerpo de la solicitud
        const { user, password } = req.body;

        // Obtener la conexión a la base de datos
        const db = await database.getConnection();

        // Generar la consulta SQL
        const sql = `SELECT * FROM usuarios WHERE user = '${user}'`;
        // Ejecutar la consulta
        const [row] = await db.query(sql);

        // Verificar si el usuario existe
        if (!row.length) {
            return res.json({
                ok: false,
                msj: "usuario no existe en la base de datos"
            });
        }

        // Verificar si la contraseña es correcta
        const existo = password === row[0].password;

        // Validar la contraseña
        if (!existo) {
            return res.json({
                ok: false,
                msj: "contraseña invalida o usuario inactivo"
            });
        }

        // Generar el objeto de usuario para el token
        const usuario = {
            id: row[0].id_user,
            nombres: row[0].nombres
        };
        // Generar el token JWT
        const token = jwt.crearToken(usuario);
        // Enviar la respuesta con el token
        res.json({
            ok: true,
            token
        });
    } catch (error) {
        // Manejar errores
        return httpError(res, "Ocurrio algo en Login");
    }
}

// Función para verificar si el token es válido
const verificar = async (req, res) => {
    try {
        // Enviar una respuesta de éxito
        res.json({
            ok: true
        });
    } catch (error) {
        // Manejar errores
        return httpError(res, "Ocurrio algo en Verificar Token");
    }
}

// Exportar las funciones
module.exports = {
    login,
    verificar
}
