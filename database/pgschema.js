const getClient = require("./pgdb.js");

module.exports.createTables = async () => {
  const client = await getClient.client

  let createChestList = `
    CREATE TABLE IF NOT EXISTS chest(
      exercise_id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR,
      target VARCHAR,
      equipment VARCHAR
    )
  `;

  let createBackList = `
    CREATE TABLE IF NOT EXISTS back(
      exercise_id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR,
      target VARCHAR,
      equipment VARCHAR
    )
  `;

  let createLegsList = `
    CREATE TABLE IF NOT EXISTS legs(
      exercise_id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR,
      target VARCHAR,
      equipment VARCHAR
    )
  `;

  let createShouldersList = `
    CREATE TABLE IF NOT EXISTS shoulders(
      exercise_id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR,
      target VARCHAR,
      equipment VARCHAR
    )
  `;

  let createArmsList = `
    CREATE TABLE IF NOT EXISTS arms(
      exercise_id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR,
      target VARCHAR,
      equipment VARCHAR
    )
  `;

  let createExerciseLogQuery = `
    CREATE TABLE IF NOT EXISTS exerciseLog(
      log_id BIGSERIAL PRIMARY KEY NOT NULL,
      name VARCHAR,
      date TIMESTAMP NOT NULL DEFAULT current_timestamp,
      sets INT []
    );
  `;
  let createRepsRefQuery = `
  CREATE TABLE IF NOT EXISTS setReps(
    rep_id INT PRIMARY KEY NOT NULL,
    reps INT
  );
  `;
  let createSetsRefQuery = `
    CREATE TABLE IF NOT EXISTS setsRef(
      log_id INT NOT NULL,
      rep_id INT NOT NULL,
      PRIMARY KEY (log_id, rep_id),
      FOREIGN KEY (rep_id)
          REFERENCES setReps (rep_id),
      FOREIGN KEY (log_id)
          REFERENCES exerciseLog (log_id)
    );
  `;

  await client.query(createChestList)
  await client.query(createBackList)
  await client.query(createLegsList)
  await client.query(createShouldersList)
  await client.query(createArmsList)
  await client.query(createExerciseLogQuery)
  await client.query(createRepsRefQuery)
  await client.query(createSetsRefQuery)
  .then(data => {
    console.log(`Created table`);
  })
  return client;
};