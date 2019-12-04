const express = require("express");
const app = express();
const fs = require("fs");
const data = fs.readFileSync(__dirname + "/../data/meals.json", "utf-8");
const meals = JSON.parse(data);
const reviewData = fs.readFileSync(__dirname + "/../data/reviews.json");
const reviews = JSON.parse(reviewData);

app.get("/", (req, res) => {
  const cheapMeals = meals.filter(meal => meal.price <= 65);
  res.json(cheapMeals);
});
meals.forEach(meal => {
  meal.reviews = [];
  reviews.forEach(review =>
    review.mealId === meal.id ? meal.reviews.push(review) : review
  );
});
module.exports = app;
