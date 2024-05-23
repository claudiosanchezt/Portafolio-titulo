// Objetivo: Validar los datos que se envian desde el cliente para crear un usuario
const { check, validationResult } = require('express-validator');
const { httpError } = require('../utils/error');
// Validar los datos que se envian desde el cliente
const validadorLogin = [
    check('user')
        .exists().withMessage("Favor debe ir el atributo nomnbre de usuario Ej: pperez")
        .notEmpty().withMessage("Favor este campo debe venir con informacion usuario Ej: pperez")
        .isLength({ min: 5 }).withMessage("El minimo de caracteres son 5"),
    check('password')
        .exists().withMessage("Favor debe ir el atributo password Ej: MiPassword123")
        .notEmpty().withMessage("Favor este campo debe venir con informacion Ej: MiPassword123")
        .isLength({ min: 3, max: 30 }).withMessage("El minimo de caracteres son 3 y el maximo son 30"),
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
    validadorLogin
}