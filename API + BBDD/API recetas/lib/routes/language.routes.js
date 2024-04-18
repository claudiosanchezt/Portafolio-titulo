"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _recetas = require("../controllers/recetas.controller");
var _user = require("../controllers/user.controller");
// ruta del proyecto
const router = (0, _express.Router)();
// url principales | https://api.pquintanilla.cl/
// router.get("/", recetasController.getRecetas);
router.get("/", (req, res) => {
  _recetas.methods.getRecetas(req, res);
});
// router.get("/usuario", userController.getUser);
router.get("/usuario", (req, res) => {
  _user.usermethods.getUser(req, res);
});

// ========= RECETAS =========

// METODOS GET
router.get("/receta/:id", _recetas.methods.getReceta); // https://api.pquintanilla.cl/receta/numero
router.get("/recetas-chile", _recetas.methods.getRecetaCL); // https://api.pquintanilla.cl/recetas-chile
router.get("/recetas-usa", _recetas.methods.getRecetaUSA); // https://api.pquintanilla.cl/recetas-usa
router.get("/recetas-gb", _recetas.methods.getRecetaGB); // https://api.pquintanilla.cl/recetas-gb
router.get("/recetas-canada", _recetas.methods.getRecetaCA); // https://api.pquintanilla.cl/recetas-canada
router.get("/recetas-es", _recetas.methods.getRecetaES); // https://api.pquintanilla.cl/recetas-es
router.get("/recetas-mexico", _recetas.methods.getRecetaMX); // https://api.pquintanilla.cl/recetas-mexico
router.get("/recetas-argentina", _recetas.methods.getReceta_ARG); // https://api.pquintanilla.cl/recetas-argentina
router.get("/paises", _recetas.methods.getPaises); // https://api.pquintanilla.cl/paises
router.get("/categorias", _recetas.methods.getCategorias); // https://api.pquintanilla.cl/categorias
router.get("/categorias-postres", _recetas.methods.getPostres); // https://api.pquintanilla.cl/categorias-postres
router.get("/categorias-desayuno", _recetas.methods.getDesayuno); // https://api.pquintanilla.cl/categorias-desayuno
// METODOS POST
// Ruta PUT para agregar una receta
router.put('/add-receta', (req, res) => {
  res.status(200).send('Receta agregada exitosamente'); // https://api.pquintanilla.cl/add-receta
});
// METODOS PUT
router.put("/edit-receta/:id", _recetas.methods.updateReceta); // https://api.pquintanilla.cl/edit-receta/numero
// METODOS DELETE
router.delete("/delete-receta/:id", _recetas.methods.deleteReceta); // https://api.pquintanilla.cl/delete-receta/numero

// ========= USUARIOS =========

// METODO GET
router.get("/", _user.usermethods.getUser); // https://api.pquintanilla.cl/usuario
router.get("/usuarioejemplo", _user.usermethods.ejemploUserPaginado); // https://api.pquintanilla.cl/usuarioejemplo?page=1
// METODO POST
router.post("/usuario"); // https://api.pquintanilla.cl/usuario
// METODO PUT
router.put("/usuario"); // https://api.pquintanilla.cl/usuario
// METODO DELETE
router.delete("/usuario"); // https://api.pquintanilla.cl/usuario
var _default = exports.default = router;
module.exports = router;