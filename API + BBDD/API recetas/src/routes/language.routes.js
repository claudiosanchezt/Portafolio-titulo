import { Router } from "express";
import { methods as recetasController } from "../controllers/recetas.controller";
import { usermethods as userController } from "../controllers/user.controller";
// ruta del proyecto
const router=Router();
// url principales | http://localhost:4000
router.get("/", recetasController.getRecetas);
router.get("/usuario", userController.getUser);

// ========= RECETAS =========

// METODOS GET
router.get("/receta/:id", recetasController.getReceta); // http://localhost:4000/receta/numero
router.get("/recetas-chile",recetasController.getRecetaCL) // http://localhost:4000/recetas-chile
router.get("/recetas-usa",recetasController.getRecetaUSA) // http://localhost:4000/recetas-usa
router.get("/recetas-gb",recetasController.getRecetaGB) // http://localhost:4000/recetas-gb
router.get("/recetas-canada",recetasController.getRecetaCA) // http://localhost:4000/recetas-canada
router.get("/recetas-es",recetasController.getRecetaES) // http://localhost:4000/recetas-es
router.get("/recetas-mexico",recetasController.getRecetaMX) // http://localhost:4000/recetas-mexico
router.get("/recetas-argentina",recetasController.getReceta_ARG) // http://localhost:4000/recetas-argentina
router.get("/paises",recetasController.getPaises) // http://localhost:4000/paises
router.get("/categorias",recetasController.getCategorias) // http://localhost:4000/categorias
router.get("/categorias-postres",recetasController.getPostres) // http://localhost:4000/categorias-postres
router.get("/categorias-desayuno",recetasController.getDesayuno) // http://localhost:4000/categorias-desayuno
// METODOS POST
router.post("/add-receta", recetasController.addReceta); // http://localhost:4000/add-receta
// METODOS PUT
router.put("/edit-receta/:id", recetasController.updateReceta); // http://localhost:4000/edit-receta/numero
// METODOS DELETE
router.delete("/delete-receta/:id", recetasController.deleteReceta); // http://localhost:4000/delete-receta/numero


// ========= USUARIOS =========

// METODO GET
router.get("/", userController.getUser); // http://localhost:4000/usuario
router.get("/usuarioejemplo", userController.ejemploUserPaginado); // http://localhost:4000/usuarioejemplo?page=1
// METODO POST
router.post("/usuario"); // http://localhost:4000/usuario
// METODO PUT
router.put("/usuario"); // http://localhost:4000/usuario
// METODO DELETE
router.delete("/usuario"); // http://localhost:4000/usuario


export default router;