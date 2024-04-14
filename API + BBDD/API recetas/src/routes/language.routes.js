import { Router } from "express";
import { methods as languageController } from "../controllers/language.controller";
// ruta del proyecto
const router=Router();
// url principal | http://localhost:4000
router.get("/", languageController.getRecetas);

// ========= RECETAS =========

// METODOS GET
router.get("/receta/:id", languageController.getReceta); // http://localhost:4000/receta/numero
router.get("/recetas-chile",languageController.getRecetaCL) // http://localhost:4000/recetas-chile
router.get("/recetas-usa",languageController.getRecetaUSA) // http://localhost:4000/recetas-usa
router.get("/recetas-gb",languageController.getRecetaGB) // http://localhost:4000/recetas-gb
router.get("/recetas-canada",languageController.getRecetaCA) // http://localhost:4000/recetas-canada
router.get("/recetas-es",languageController.getRecetaES) // http://localhost:4000/recetas-es
router.get("/recetas-mexico",languageController.getRecetaMX) // http://localhost:4000/recetas-mexico
router.get("/recetas-argentina",languageController.getReceta_ARG) // http://localhost:4000/recetas-argentina
router.get("/paises",languageController.getPaises) // http://localhost:4000/paises
router.get("/categorias",languageController.getCategorias) // http://localhost:4000/categorias
router.get("/categorias-postres",languageController.getPostres) // http://localhost:4000/categorias-postres
router.get("/categorias-desayuno",languageController.getDesayuno) // http://localhost:4000/categorias-desayuno
// METODOS POST
router.post("/add-receta", languageController.addReceta); // http://localhost:4000/add-receta
// METODOS PUT
router.put("/edit-receta/:id", languageController.updateReceta); // http://localhost:4000/edit-receta/numero
// METODOS DELETE
router.delete("/delete-receta/:id", languageController.deleteReceta); // http://localhost:4000/delete-receta/numero


// ========= USUARIOS =========

// METODO GET
router.get("/usuario", languageController.getUser); // http://localhost:4000/usuario
router.get("/usuarioejemplo", languageController.ejemploUserPaginado); // http://localhost:4000/usuarioejemplo?page=1
// METODO POST
router.post("/usuario"); // http://localhost:4000/usuario
// METODO PUT
router.put("/usuario"); // http://localhost:4000/usuario
// METODO DELETE
router.delete("/usuario"); // http://localhost:4000/usuario



export default router;