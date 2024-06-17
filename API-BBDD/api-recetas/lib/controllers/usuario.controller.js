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
    const sql = `SELECT nombre, apellido, correo, activo, fecha_creacion FROM usuario`;
    const [rows] = await db.query(sql);
    const resultado = {
      ok: true,
      data: rows
    };
    res.json(resultado);
  } catch (error) {
    return httpError(res, "Ocurrio algo en Get usuario");
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
    const sql = `SELECT nombre, apellido, correo, activo, fecha_creacion FROM usuario WHERE id_usr = ${id}`;
    const [row] = await db.query(sql);
    if (row.length > 0) {
      const resultado = {
        ok: true,
        data: row
      };
      res.json(resultado);
    }
    if (!row.length) {
      return httpError(res, "No existe el usuario");
    }
  } catch (error) {
    return httpError(res, "Ocurrio algo en Get Usuario");
  }
};
//  METODO PARA AGREGAR UNA USUARIO
const agregarUsuario = async (req, res) => {
  try {
    const body = matchedData(req);
    const {
      nombre,
      apellido,
      correo,
      password,
      activo
    } = body;
    // Obtener la conexión a la base de datos
    const db = await database.getConnection();
    const sql = `INSERT INTO usuario( nombre, apellido, correo, password, activo,fecha_creacion)
                VALUES('${nombre}', '${apellido}', '${correo}', '${password}', ${activo}, NOW())`;
    const result = await db.query(sql);
    if (result[1] > 0) {
      return res.json({
        "ok": true,
        "msj": "Usuario Agregado Correctamente."
      });
    }
    res.json({
      "ok": false,
      "msj": "Usuario No Agregado"
      // "usuario": usuario
    });
  } catch (error) {
    return httpError(res, "Ocurrio algo en POST Usuario", error);
  }
};
//  METODO PARA EDITAR UNA USUARIO
const editarUsuario = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      nombre,
      apellido,
      correo,
      activo
    } = req.body;
    // Obtener la conexión a la base de datos
    const db = await database.getConnection();
    const sql = `UPDATE usuario SET
                    nombre = '${nombre}',
                    apellido = '${apellido}',
                    correo = '${correo}',
                    activo = ${activo}
                WHERE id_usr = ${id}`;
    const [result] = await db.query(sql);
    if (result.affectedRows) {
      res.json({
        "ok": true,
        "msj": "usuario modificado"
      });
    }
    res.json({
      "ok": false,
      "msj": "usuario no modificado"
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
    const sql = `DELETE FROM usuario
                WHERE id_usr = ${id}`;
    const [result] = await db.query(sql);
    if (result.affectedRows) {
      return res.json({
        "ok": true,
        "msj": "usuario eliminado"
      });
    }
    res.json({
      "ok": false,
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