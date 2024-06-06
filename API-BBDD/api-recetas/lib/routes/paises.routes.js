"use strict";

/**
 * @swagger
 * /api/paises:
 *   get:
 *     summary: Obtener todos los países
 *     responses:
 *       200:
 *         description: Países obtenidos exitosamente
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
 *                     $ref: '#/components/schemas/Pais'
 *   post:
 *     summary: Agregar un nuevo país
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevoPais'
 *     responses:
 *       200:
 *         description: País agregado exitosamente
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
 * /api/paises/{id}:
 *   get:
 *     summary: Obtener un país por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: País obtenido exitosamente
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
 *                     $ref: '#/components/schemas/Pais'
 *   put:
 *     summary: Actualizar un país
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
 *             $ref: '#/components/schemas/ActualizarPais'
 *     responses:
 *       200:
 *         description: País actualizado exitosamente
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
 *     summary: Eliminar un país
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
 *         description: País eliminado exitosamente
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
 * /api/paises/nombre/{name}:
 *   get:
 *     summary: Obtener países por nombre
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Países obtenidos exitosamente
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
 *                     $ref: '#/components/schemas/Pais'
 *
 * components:
 *   schemas:
 *     Pais:
 *       type: object
 *       properties:
 *         id_pais:
 *           type: integer
 *         nombre:
 *           type: string
 *         url_imagen:
 *           type: string
 *         fecha_creacion:
 *           type: string
 *           format: date-time
 *         estado:
 *           type: string
 *
 *     NuevoPais:
 *       type: object
 *       required:
 *         - nombre
 *         - url_imagen
 *         - estado
 *       properties:
 *         nombre:
 *           type: string
 *         url_imagen:
 *           type: string
 *         estado:
 *           type: boolean
 *
 *     ActualizarPais:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         estado:
 *           type: boolean
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
  obtenerPaises,
  agregarPais,
  obtenerPais,
  obtenerPaisNombre,
  editarPais,
  eliminarPais
} = require('../controllers/paises.controllers');
//LLAMAMOS NUESTRO METODO DE VERIFICAR TOKEN.
const {
  TokenTrue
} = require('../middlewares/auth');
const {
  validadorPaises
} = require('../validators/paises.validators');
//INSTACIA DE NUESTRA ROUTER DE EXPRESS
const router = Router();
//RUTAS DE PAISES
router.get('/', obtenerPaises);
router.post('/', TokenTrue, [validadorPaises], agregarPais);
router.get('/:id', obtenerPais);
router.get('/nombre/:name', obtenerPaisNombre);
router.put('/:id', TokenTrue, editarPais);
router.delete('/:id', TokenTrue, eliminarPais);
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = router;