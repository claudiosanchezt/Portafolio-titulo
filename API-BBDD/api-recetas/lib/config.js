"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.claves = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_dotenv.default.config();
const claves = exports.claves = {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  password: process.env.PASSWORD || "",
  SECRETO: process.env.SECRETO || ""
};