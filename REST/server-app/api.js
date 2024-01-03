const express = require('express');
const bodyParser = require('body-parser');

const api = express.Router();

api.use(bodyParser.json());

// api.get()
// api.post()
// etc

module.exports = api;
