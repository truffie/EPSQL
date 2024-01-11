require('dotenv').config();
const PASSWORD = process.env.PASSWORD;
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: "5432",
  password: PASSWORD,
  user: 'postgres',
  database: 'skills'
});

module.exports = pool;