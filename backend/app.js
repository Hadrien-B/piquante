const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({ message: 'votre requête a été reçue' });
})

module.exports = app;