"use strict";

var _promiseMysql = _interopRequireDefault(require("promise-mysql"));
var _config = require("./../config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const connection = _promiseMysql.default.createConnection({
  host: _config.claves.host,
  database: _config.claves.database,
  user: _config.claves.user,
  password: _config.claves.password
});
const getConnection = () => {
  return connection;
};
module.exports = {
  getConnection
};