const express = require('express');

const ongController = require('./controllers/ong-controller');

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

module.exports = routes;