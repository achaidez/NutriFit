const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000);
console.log('watching port 3000')

app.get('/', (req, res) => {
  res.status(200).send('Main Get')
});