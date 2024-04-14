import { Router } from "express";
import { methods as languageController } from "../controllers/language.controller";
// ruta del proyecto
const router=Router();
// url principal | http://localhost:4000
router.get("/", languageController.getLanguages);

// ========= RECETAS =========

// METODOS GET
router.get("/receta/:id", languageController.getLanguage); // http://localhost:4000/receta/numero
router.get("/recetas-chile",languageController.getLanguagecl) // http://localhost:4000/recetas-chile
router.get("/recetas-usa",languageController.getLanguageusa) // http://localhost:4000/recetas-usa
router.get("/recetas-gb",languageController.getLanguagegb) // http://localhost:4000/recetas-gb
router.get("/recetas-canada",languageController.getLanguagecanada) // http://localhost:4000/recetas-canada
router.get("/recetas-es",languageController.getLanguage_es) // http://localhost:4000/recetas-es
router.get("/recetas-mexico",languageController.getLanguagemx) // http://localhost:4000/recetas-mexico
router.get("/recetas-argentina",languageController.getLanguageArgentina) // http://localhost:4000/recetas-argentina
router.get("/paises",languageController.getPaises) // http://localhost:4000/paises
router.get("/categorias",languageController.getCategorias) // http://localhost:4000/categorias
router.get("/categorias-postres",languageController.getPostres) // http://localhost:4000/categorias-postres
router.get("/categorias-desayuno",languageController.getDesayuno) // http://localhost:4000/categorias-desayuno
// METODOS POST
router.post("/add-user", languageController.addUsuario); // http://localhost:4000/add-user
// METODOS PUT
router.put("/edit-user/:id", languageController.updateUsuario); // http://localhost:4000/edit-user/numero
// METODOS DELETE
router.delete("/delete-user/:id", languageController.deleteUsuario); // http://localhost:4000/delete-user/numero


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