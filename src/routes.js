const express = require('express');

const routes = express.Router();

routes.use('/', (req, res) => {
    return res.send('Hello Omnistack 11.0!');
});

module.exports = routes;