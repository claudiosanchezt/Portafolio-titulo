import express from "express";
import morgan from "morgan";
// routes - rutas
import LanguageRoutes from "./routes/language.routes"
const app=express(); //ejecu express
// settings
app.set("port", 4000);
// middleware
app.use(morgan("dev"));
app.use(express.json());

// routes
// app.use("/listado", LanguageRoutes)
app.use("/",LanguageRoutes)
// app.use("/api/usuarios")

module.exports = app;