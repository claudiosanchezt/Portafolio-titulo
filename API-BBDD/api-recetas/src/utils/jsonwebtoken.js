// Objetivo: Crear y verificar token
const jwt = require('jsonwebtoken');
const { claves } = require('./../config');
// Creamos el token
const crearToken = ( usuario ) => {

    const token = jwt.sign(
        { usuario },
        claves.SECRETO);

    return token;
}
// Verificamos el token
const verificarToken = ( token ) => {
    try {
        const existo = jwt.verify(token, claves.SECRETO);
        return existo;
    } catch (error) {
        return false;
    }
}
// Exportamos los metodos
module.exports = {
    crearToken,
    verificarToken
}