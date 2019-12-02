const express = require("express");
const mealsData = require("../data/meals.json");
const app = express();
app.get("/meals", (req, res) => {
    console.log(res.json(mealsData));
});
module.exports = app;