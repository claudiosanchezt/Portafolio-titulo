import mysql from "promise-mysql";
import { claves } from "./../config";

const connection = mysql.createConnection({
    host: claves.host,
    database: claves.database,
    user: claves.user,
    password: claves.password
});

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
}
