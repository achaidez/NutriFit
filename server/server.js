require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const port = process.env.PORT || 3000;
const db = require('../database/db.js');

const authRouter = require("./routes/auth.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", authRouter);

app.listen(port, function () {
  console.log(`🚀 Listening on port ${port}`);
});