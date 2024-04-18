import { Router } from "express";
import { methods as recetasController } from "../controllers/recetas.controller";
import { usermethods as userController } from "../controllers/user.controller";
// ruta del proyecto
const router = Router();
// url principales | https://api.pquintanilla.cl/
// router.get("/", recetasController.getRecetas);
router.get("/", (req, res) => {
    recetasController.getRecetas(req, res);
});
// router.get("/usuario", userController.getUser);
router.get("/usuario", (req, res) => {
    userController.getUser(req, res);
});

// ========= RECETAS =========

// METODOS GET
router.get("/receta/:id", recetasController.getReceta); // https://api.pquintanilla.cl/receta/numero
router.get("/recetas-chile", recetasController.getRecetaCL) // https://api.pquintanilla.cl/recetas-chile
router.get("/recetas-usa", recetasController.getRecetaUSA) // https://api.pquintanilla.cl/recetas-usa
router.get("/recetas-gb", recetasController.getRecetaGB) // https://api.pquintanilla.cl/recetas-gb
router.get("/recetas-canada", recetasController.getRecetaCA) // https://api.pquintanilla.cl/recetas-canada
router.get("/recetas-es", recetasController.getRecetaES) // https://api.pquintanilla.cl/recetas-es
router.get("/recetas-mexico", recetasController.getRecetaMX) // https://api.pquintanilla.cl/recetas-mexico
router.get("/recetas-argentina", recetasController.getReceta_ARG) // https://api.pquintanilla.cl/recetas-argentina
router.get("/paises", recetasController.getPaises) // https://api.pquintanilla.cl/paises
router.get("/categorias", recetasController.getCategorias) // https://api.pquintanilla.cl/categorias
router.get("/categorias-postres", recetasController.getPostres) // https://api.pquintanilla.cl/categorias-postres
router.get("/categorias-desayuno", recetasController.getDesayuno) // https://api.pquintanilla.cl/categorias-desayuno
// METODOS POST
// Ruta PUT para agregar una receta
router.put('/add-receta', (req, res) => {
    res.status(200).send('Receta agregada exitosamente'); // https://api.pquintanilla.cl/add-receta
}); 
// METODOS PUT
router.put("/edit-receta/:id", recetasController.updateReceta); // https://api.pquintanilla.cl/edit-receta/numero
// METODOS DELETE
router.delete("/delete-receta/:id", recetasController.deleteReceta); // https://api.pquintanilla.cl/delete-receta/numero


// ========= USUARIOS =========

// METODO GET
router.get("/", userController.getUser); // https://api.pquintanilla.cl/usuario
router.get("/usuarioejemplo", userController.ejemploUserPaginado); // https://api.pquintanilla.cl/usuarioejemplo?page=1
// METODO POST
router.post("/usuario"); // https://api.pquintanilla.cl/usuario
// METODO PUT
router.put("/usuario"); // https://api.pquintanilla.cl/usuario
// METODO DELETE
router.delete("/usuario"); // https://api.pquintanilla.cl/usuario



export default router;

module.exports = router