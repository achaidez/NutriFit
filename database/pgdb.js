const { Client } = require('pg');
require('dotenv').config();

module.exports.getClient = async () => {
  const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
  });
  await client.connect();
  await client.query('SELECT $1::text as connected', ['Connection to postgres successful!'])
  .then(data => {
    console.log(data.rows[0].connected);
  })
  return client;
};