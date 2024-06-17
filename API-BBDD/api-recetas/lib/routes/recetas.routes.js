"use strict";

/**
 * @swagger
 * /api/recetas:
 *   get:
 *     summary: Obtener todas las recetas
 *     responses:
 *       200:
 *         description: Recetas obtenidas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Receta'
 *   post:
 *     summary: Agregar una nueva receta
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevaReceta'
 *     responses:
 *       200:
 *         description: Receta agregada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 msj:
 *                   type: string
 *
 * /api/recetas/{id}:
 *   get:
 *     summary: Obtener una receta por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Receta obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Receta'
 *   put:
 *     summary: Actualizar una receta
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActualizarReceta'
 *     responses:
 *       200:
 *         description: Receta actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 msj:
 *                   type: string
 *   delete:
 *     summary: Eliminar una receta
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Receta eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 msj:
 *                   type: string
 *
 * /api/recetas/nombre/{name}:
 *   get:
 *     summary: Obtener recetas por nombre
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recetas obtenidas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Receta'
 *
 * /api/recetas/categoria/{name}:
 *   get:
 *     summary: Obtener recetas por categoría
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recetas obtenidas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Receta'
 *
 * /api/recetas/pais/{name}:
 *   get:
 *     summary: Obtener recetas por país
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recetas obtenidas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Receta'
 *
 * components:
 *   schemas:
 *     Receta:
 *       type: object
 *       properties:
 *         id_receta:
 *           type: integer
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         ingredientes:
 *           type: string
 *         preparacion:
 *           type: string
 *         url_imagen:
 *           type: string
 *         fecha_creacion:
 *           type: string
 *           format: date-time
 *         estado:
 *           type: string
 *         categoria:
 *           type: string
 *         pais:
 *           type: string
 *
 *     NuevaReceta:
 *       type: object
 *       required:
 *         - nombre
 *         - descripcion
 *         - ingredientes
 *         - preparacion
 *         - url_imagen
 *         - estado
 *         - categoria
 *         - pais
 *       properties:
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         ingredientes:
 *           type: string
 *         preparacion:
 *           type: string
 *         url_imagen:
 *           type: string
 *         estado:
 *           type: boolean
 *         categoria:
 *           type: string
 *         pais:
 *           type: string
 *
 *     ActualizarReceta:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         ingredientes:
 *           type: string
 *         preparacion:
 *           type: string
 *         url_imagen:
 *           type: string
 *         estado:
 *           type: boolean
 *         categoria:
 *           type: string
 *         pais:
 *           type: string
 *
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
// Obtenemos el metodo Router de express
const {
  Router
} = require('express');
//CONTROLADORES
const {
  obtenerRecetas,
  obtenerRecetasRandom,
  agregarReceta,
  obtenerReceta,
  obtenerRecetaNombre,
  obtenerRecetaCategoriaNombre,
  obtenerRecetaPaisNombre,
  editarReceta,
  eliminarReceta
} = require('../controllers/recetas.controllers');
//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN.
const {
  TokenTrue
} = require('../middlewares/auth');
const {
  validadorRecetas
} = require('../validators/recetas.validators');
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
const router = Router();
//RUTAS DE RECETAS
router.get('/', obtenerRecetas);
router.get('/receta-aleatoria', obtenerRecetasRandom);
router.post('/', TokenTrue, [validadorRecetas], agregarReceta);
router.get('/:id', obtenerReceta);
router.get('/nombre/:name', obtenerRecetaNombre);
router.get('/categoria/:name', obtenerRecetaCategoriaNombre);
router.get('/pais/:name', obtenerRecetaPaisNombre);
router.put('/:id', TokenTrue, editarReceta);
router.delete('/:id', TokenTrue, eliminarReceta);
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;