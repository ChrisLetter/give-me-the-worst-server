import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

const config: { [key: string]: any } = {};

config.PORT = process.env.PORT || 5000;
config.SECRET_KEY = process.env.SECRET_KEY || 'secret_key';
config.DB_URL = process.env.DB_URL;

export default config;
