const { getClient } = require("./pgdb.js");

module.exports.creatTables = async () => {
  const client = await getClient();
  let createTableQuery = `
    CREATE TABLE IF NOT EXISTS my_table(
      id BIGSERIAL PRIMARY KEY NOT NULL ,
      name varchar,
      date TIMESTAMP NOT NULL DEFAULT current_timestamp
    );
  `;
  await client.query(createTableQuery)
  .then(data => {
    console.log(`Created table.`);
  })
  return client;
};