const express = require("express");
const fs = require("fs");
const app = express();
const mealData = fs.readFileSync(__dirname + "/../data/meals.json");
const meals = JSON.parse(mealData);
const reviewData = fs.readFileSync(__dirname + "/../data/reviews.json");
const reviews = JSON.parse(reviewData);

app.get("/", (req, res) => {
  const random = Math.floor(Math.random() * meals.length);
  const randomMeal = meals.filter(meal => meal.id === random);
  res.json(randomMeal);
});

meals.forEach(meal => {
  meal.reviews = [];
  reviews.forEach(review =>
    review.mealId === meal.id ? meal.reviews.push(review) : review
  );
});
module.exports = app;