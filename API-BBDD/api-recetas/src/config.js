require('dotenv').config();
export const claves ={
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    SECRETO: process.env.SECRETO || ""
}
