const express = require("express");
const fs = require("fs");
const app = express();
const reservations = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json"));
app.get("/", (req,res) => {
    const random = Math.floor(Math.random() * reservations.length);
    const randomResrvation = reservations.filter(resrvation => resrvation.id === random);
    res.json(randomResrvation);
});
module.exports = app;