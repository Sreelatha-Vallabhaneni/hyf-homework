const express = require("express");
const fs = require("fs");
const route = express.Router();
const reservations = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json"));

// Respond with the json for all reservations
route.get("/", (req, res) => {
    res.json(reservations);
});
// Respond with the json for the reservation with the corresponding id
route.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const ID = parseInt(id);
  const reservationsId = reservations.filter(reservation => {
    return reservation.id === ID;
  });
  res.send(reservationsId);
});

module.exports = route;