const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res) => {
    return res.send('Hello Omnistack 11.0!');
});

app.listen(3333);