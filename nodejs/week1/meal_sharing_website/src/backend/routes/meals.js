const express = require("express");
const fs = require("fs");
const app = express();
const mealsData = fs.readFileSync(__dirname + "/../data/meals.json", "utf-8");
const meals = JSON.parse(mealsData);
const reviewData = fs.readFileSync(__dirname + "/../data/reviews.json");
const reviews = JSON.parse(reviewData);

app.get("/", (req, res) => { 
  res.json(meals);
});

meals.forEach(meal => {
  meal.reviews = [];
  reviews.forEach(review => review.mealId === meal.id? meal.reviews.push(review): review)   
});
module.exports = app;
