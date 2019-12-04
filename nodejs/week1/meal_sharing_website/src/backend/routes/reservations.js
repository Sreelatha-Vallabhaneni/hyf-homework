const express = require("express");
const fs = require("fs");
const app = express();
const reservations = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json"));

app.get("/", (req, res) => {
    res.json(reservations);
});

module.exports = app;