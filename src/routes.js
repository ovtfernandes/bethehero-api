const express = require('express');

const ongController = require('./controllers/ong-controller');
const incidentController = require('./controllers/incident-controller');
const profileController = require('./controllers/profile-controller');

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;