// Objetivo: Validar los datos que se envian desde el cliente para crear un usuario
const { check, validationResult } = require('express-validator');
const { httpError } = require('../utils/error');
// Validar los datos que se envian desde el endpoint.
const validadorCategorias = [
    check('nombre')
        .exists().withMessage("Favor debe ir el atributo nombre categoria")
        .notEmpty().withMessage("Favor este campo debe venir con informacion"),
        check('url_imagen')
        .exists().withMessage("Favor debe ir el atributo url_imagen Ej: https://www.google.com/logos/doodles/2015/doodle-2015-10-28.png")
        .notEmpty().withMessage("Favor este campo debe venir con informacion"),
    check('estado')
        .exists().withMessage("Favor debe ir el atributo estado")
        .notEmpty().withMessage("Favor este campo debe venir con informacion")
        .isInt({ min: 0, max: 1 }).withMessage("Favor colocar 1 si es verdadero o 0 si es falso"),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            next();
        } catch (error) {
            return httpError(res, error.array());
        }
    }
];
// Exportamos la funcion
module.exports = {
    validadorCategorias
}