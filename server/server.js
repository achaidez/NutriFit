require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const port = process.env.PORT || 3000;
const db = require('../database/db.js');
const client = require('../database/pgdb.js');
const { createTables } = require('../database/pgschema.js');

// importing the routes
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const cookiesRouter = require("./routes/cookies");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//adding the routes
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/cookies", cookiesRouter);

app.listen(port, function () {
  console.log(`🚀 Listening on port ${port}`);
  //console.log(indexRouter, authRouter)
});

createTables()

//exercise routes----------------------------------------------------------->

//GET full log
app.get("/exerciseLog", client.getExerciseLog);

//GET exercise lists
app.get("/exercises/:part", (req, res) => {
  const part = req.params.part;
  client.getExercises(part, res);
});