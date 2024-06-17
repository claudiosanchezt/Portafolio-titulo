"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.claves = void 0;
require('dotenv').config();
const claves = exports.claves = {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  password: process.env.PASSWORD || "",
  SECRETO: process.env.SECRETO || ""
};