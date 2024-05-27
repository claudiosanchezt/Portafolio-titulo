"use strict";

//  DECLARACION DE VARIABLES
const database = require('./../database/database');
const {
  httpError
} = require('../utils/error');
const {
  matchedData
} = require('express-validator');
//  METODO PARA OBTENER TODAS LOS USUARIOS
const obtenerTodo = async (req, res) => {
  //obtener el id de todos los usuarios
  try {
    // Obtener la conexión a la base de datos
    const db = await database.getConnection();
    console.log(db);
    const sql = `SELECT nombres, user, fecha_creacion FROM usuarios`;
    const [rows] = await db.query(sql);
    console.log(rows);
    const resultado = {
      ok: true,
      data: rows
    };
    res.json(resultado);
  } catch (error) {
    return httpError(res, "Ocurrio algo en Get Usuarios");
  }
};
//  METODO PARA OBTENER UNA USUARIO
const obtenerUnoSolo = async (req, res) => {
  //obtener el id por un usuario
  try {
    const {
      id
    } = req.params;
    // Obtener la conexión a la base de datos
    const db = await database.getConnection();
    const sql = `SELECT nombres, user, fecha_creacion FROM usuarios WHERE id_user = ${id}`;
    const [row] = await db.query(sql);
    const resultado = {
      ok: true,
      data: row
    };
    res.json(resultado);
  } catch (error) {
    return httpError(res, "Ocurrio algo en Get Usuario");
  }
};
//  METODO PARA AGREGAR UNA USUARIO
const agregarUsuario = async (req, res) => {
  try {
    const body = matchedData(req);
    const {
      nombres,
      user,
      password
    } = body;
    const passwordhash = password;
    // Obtener la conexión a la base de datos
    const db = await database.getConnection();
    comsole.log(db);
    const sql = `INSERT INTO usuarios(nombres, user, password,fecha_creacion)
                VALUES('${nombres}', '${user}', '${passwordhash}', NOW())`;
    const [result] = await db.query(sql);
    if (result.insertId) {
      return res.json({
        "msj": "Usuario Agregado Correctamente",
        "usuario": result
      });
    }
    res.json({
      "msj": "Usuario No Agregado"
      // "usuario": usuario
    });
  } catch (error) {
    return httpError(res, "Ocurrio algo en POST Usuario");
  }
};
//  METODO PARA EDITAR UNA USUARIO
const editarUsuario = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      nombres,
      user
    } = req.body;
    // Obtener la conexión a la base de datos
    const db = await database.getConnection();
    const sql = `UPDATE usuarios SET
                    nombres = '${nombres}',
                    user = ${user}
                WHERE id_user = ${id}`;
    const [result] = await db.query(sql);
    res.json({
      "msj": "usuario modificado"
    });
  } catch (error) {
    return httpError(res, "Ocurrio algo en PUT Usuario");
  }
};
//  METODO PARA ELIMINAR UNA USUARIO
const eliminarUsuario = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    // Obtener la conexión a la base de datos
    const db = await database.getConnection();
    const sql = `DELETE FROM usuarios
                WHERE id_user = ${id}`;
    const [result] = await db.query(sql);
    if (result.affectedRows) {
      return res.json({
        "msj": "usuario eliminado"
      });
    }
    res.json({
      "msj": "usuario no eliminado"
    });
  } catch (error) {
    return httpError(res, "Ocurrio algo en DELETE Usuario");
  }
};
//  EXPORTO MIS METODOS
module.exports = {
  obtenerTodo,
  obtenerUnoSolo,
  agregarUsuario,
  editarUsuario,
  eliminarUsuario
};