const express = require("express");
const fs = require("fs");
const route = express.Router();
const reviews = JSON.parse(
  fs.readFileSync(__dirname + "/../data/reviews.json")
);

// Respond with the json for all reviews
route.get("/", (req, res) => {
  res.json(reviews);
});
// Respond with the json for the review with the corresponding id
route.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const ID = parseInt(id);
  const reviewsId = reviews.filter(review => {
    return review.id === ID;
  });
  res.send(reviewsId);
});

module.exports = route;
