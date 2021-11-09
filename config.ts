require('dotenv').config();

const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || 'secret_key';
const DB_URL = process.env.DB_URL;

export = { PORT, SECRET_KEY, DB_URL };
