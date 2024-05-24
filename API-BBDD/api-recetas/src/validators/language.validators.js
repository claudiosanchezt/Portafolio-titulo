const { check, validationResult } = require('express-validator');
const validadorReceta = [
    check('nombre_receta')
    .notEmpty().withMessage('El nombre de la receta es obligatorio')
    .isLength({ max: 100 }).withMessage('El nombre de la receta no debe exceder los 100 caracteres'),
    check('ingrediente_receta')
    .notEmpty().withMessage('Los ingredientes de la receta son obligatorios')
    .isLength({ max: 500 }).withMessage('Los ingredientes de la receta no deben exceder los 500 caracteres'),
    check('pais_receta')
    .notEmpty().withMessage('El país de la receta es obligatorio')
    .isLength({ max: 50 }).withMessage('El país de la receta no debe exceder los 50 caracteres'),
    check('preparacion_receta')
    .notEmpty().withMessage('La preparación de la receta es obligatoria')
    .isLength({ max: 1000 }).withMessage('La preparación de la receta no debe exceder los 1000 caracteres'),
    check('categoria')
    .notEmpty().withMessage('La categoría de la receta es obligatoria')
    .isLength({ max: 50 }).withMessage('La categoría de la receta no debe exceder los 50 caracteres'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validadorEditarReceta = [
    check('id')
    .notEmpty().withMessage('El ID de la receta es obligatorio')
    .isNumeric().withMessage('El ID de la receta debe ser un número'),
  ...validadorReceta
];

const validadorEliminarReceta = [
    check('id')
    .notEmpty().withMessage('El ID de la receta es obligatorio')
    .isNumeric().withMessage('El ID de la receta debe ser un número'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validadorReceta,
  validadorEditarReceta,
  validadorEliminarReceta
};
