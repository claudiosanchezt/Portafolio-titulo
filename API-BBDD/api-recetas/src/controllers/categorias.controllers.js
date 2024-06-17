// Obtenemos el metodo Router de express
const database = require('./../database/database');
const { httpError } = require('../utils/error');
const { obtenerData } = require('../middlewares/auth');
//CONTROLADORES
const obtenerCategorias = async (req, res) => {
    try {
        const db = await database.getConnection();
        //  METODO PARA OBTENER TODAS LOS PAISES
        const sql = `
            SELECT 
                c.id_cat,
                c.nombre,
                c.url_imagen,
                c.fecha_creacion,
                CASE c.estado
                    WHEN 1 THEN 'Activo'
                    ELSE 'Inactivo'
                END AS estado                
            FROM categoria c
        `;
        //EJECUTAMOS LA CONSULTA
        const [rows] = await db.query(sql);
        //RETORNAMOS LA RESPUESTA
        res.json(
            {
                "ok": true,
                data: rows
            }
        );
    } catch (error) {
        httpError(res, "ERROR_GET_CATETORIAS");
    }
}
//  METODO PARA AGREGAR UNA CATEGORIA
const agregarCategoria = async (req, res) => {

    try {
        const { nombre, estado, url_imagen } = req.body;
        const token = req.headers.authorization;
        const { usuario } = obtenerData(token.split(" ").pop());
        const id_usuario = usuario.id;
        const db = await database.getConnection();
        const sql = `
            INSERT INTO categoria(nombre, url_imagen, estado, fecha_creacion, id_usr)
            VALUES('${nombre}', '${url_imagen}', '${estado}', NOW(), ${id_usuario})
        `;
        // EJECUTAMOS LA CONSULTA 
        const [result] = await db.query(sql);
        if (!result[0]) {
            return res.json({
                "ok": true,
                "msj": "Categoria Agregada Correctamente."
            });
        }
        res.json({
            "ok": false,
            "msj": "Cateogria No Agregada",
        });        
    } catch (error) {
        return httpError(res, "ERROR_POT_AGREGAR_CATETORIA", error);
    }
}
//  METODO PARA OBTENER UNA CATEGORIA POR ID    
const obtenerCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const db = await database.getConnection();

        const sql = `
        SELECT 
                c.id_cat,
                c.nombre,
                c.url_imagen,
                c.fecha_creacion,
                CASE c.estado
                    WHEN 1 THEN 'Activo'
                    ELSE 'Inactivo'
                END AS estado                
            FROM categoria c
        WHERE c.id_cat = ${id}
    `;
        const [rows] = await db.query(sql);
        res.json(
            {
                "ok": true,
                data: rows
            }
        );
    } catch (error) {
        return httpError(res, "ERROR_GET_UN_DATO_CATEGORIA_POR_ID", error);
    }
}
//  METODO PARA OBTENER UNA CATEGORIA POR NOMBRE
const obtenerCategoriaNombre = async (req, res) => {
    try {
        const { name } = req.params;
        const db = await database.getConnection();
        const sql = `
        SELECT 
                c.id_cat,
                c.nombre,
                c.url_imagen,
                c.fecha_creacion,
                CASE c.estado
                    WHEN 1 THEN 'Activo'
                    ELSE 'Inactivo'
                END AS estado
            FROM categoria c
        WHERE c.nombre like '${name}%'
    `;
       //EJECUTAMOS LA CONSULTA 
       const [rows] = await db.query(sql);
       res.json(
           {
               "ok": true,
               data: rows
           }
       );
    } catch (error) {
        return httpError(res, "ERROR_GET_UN_SOLO_DATO-DE-LA-CATEGORIA-POR-NOMBRE")
    }
}
// Metodos para editar
const editarCategoria = async (req, res) => {

    try {
        const { id } = req.params;
        const { nombre, estado, url_imagen} = req.body;
        const db = await database.getConnection();
        const sql = `
            UPDATE categoria SET
                nombre = '${nombre}',
                url_imagen = '${url_imagen}',
                estado = ${estado}
            WHERE id_cat = ${id}
        `;
        //EJECUTAMOS LA CONSULTA
        const [resultado] = await db.query(sql);
        if (!resultado.affectedRows) {
            return httpError(res, "Error al Editar Categoria");
        }
        //RETORNAMOS LA RESPUESTA
        return res.json({
            "ok": true,
            "msj": "Se edito correctamente  la Categoria"
        });
    } catch (error) {
        return httpError(res, "Ocurrio algo en PUT Categoria");
    }
}
// Metodos para eliminar
const eliminarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const db = await database.getConnection();
        const sql = `DELETE FROM categoria WHERE id_cat = ${id}`;
        const [resultado] = await db.query(sql);
        if (!resultado.affectedRows) {
            return httpError(res, "No se pudo eliminar nada de la Categoria");
        }
        return res.json(
            {
                "ok": true,
                "msj": "Categoria fue eliminada correctamente"
            }
        )
    } catch (error) {
        return httpError(res, "ERROR EN DELETE CATEGORIA");
    }
}
//EXPORTA NUESTRA RUTA PARA NUESTRO INDEX.JS
module.exports = {  
    obtenerCategorias,
    agregarCategoria,
    obtenerCategoria,
    obtenerCategoriaNombre,
    editarCategoria,
    eliminarCategoria           
}