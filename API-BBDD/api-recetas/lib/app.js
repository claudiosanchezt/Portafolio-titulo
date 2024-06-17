"use strict";

//IMPORTO RUTAS
const usuarioRoutes = require('./routes/usuario.routes');
const loginRoutes = require('./routes/login.routes');
const recetasRoutes = require('./routes/recetas.routes');
const paisesRoutes = require('./routes/paises.routes');
const categoriasRoutes = require('./routes/categorias.routes');
//SWAGGER
const swaggerConfig = require('./utils/swagger');
const express = require('express');
const morgan = require('morgan');
//INICIALIZO EXPRESS
const app = express();
// Configurar Swagger
swaggerConfig(app);
const cors = require('cors');
// settings
app.set("port", 3000);
// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
//RUTAS
app.use('/usuario', usuarioRoutes);
app.use('/auth', loginRoutes);
app.use('/recetas', recetasRoutes);
app.use('/pais', paisesRoutes);
app.use('/categoria', categoriasRoutes);
//RUTA POR DEFECTO
app.all('*', (req, res) => {
  res.json({
    "ok": false,
    "msj": "URL no encontrada"
  });
});
module.exports = app;