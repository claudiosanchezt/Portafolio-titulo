require('dotenv').config();

<<<<<<< HEAD
export const claves ={
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    SECRETO: process.env.SECRETO || ""
}
=======
module.exports = {
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
};
>>>>>>> upstream/main

