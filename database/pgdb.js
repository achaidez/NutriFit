const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE
});

client.connect()
.then(() => {
  console.log('pg db connected')
});

//Exercise queries-------------------------------------------------------------->

const getExerciseLog = (req, res) => {
  client.query('SELECT * FROM exerciseLog;', (err, data) => {
    if (err) {
      throw err;
    }
    res.status(200).json(data.rows);
  })
};

const getExercises = (req, res) => {
  const part = req;
  client.query('SELECT * FROM ' + part + ';', (err, data) => {
    if (err) {
      throw err;
    };
    res.status(200).json(data.rows);
  });
};



module.exports = {
  client,
  getExerciseLog,
  getExercises
}