const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

client.connect();

exports.query = async function Query(query,values){
    const {rows} = await client.query(query,values);
    return rows;

};
