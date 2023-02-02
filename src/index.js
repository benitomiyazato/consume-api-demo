const express = require('express');
const app = express();

app.get('/api/character', (req, res) => {
    res.send({message: 'Hello, world!'});
})

app.listen(3000);