const express = require("express");
const fs = require("fs");
const route = express.Router();
const mealsData = fs.readFileSync(__dirname + "/../data/meals.json", "utf-8");
const meals = JSON.parse(mealsData);
const reviewData = fs.readFileSync(__dirname + "/../data/reviews.json");
const reviews = JSON.parse(reviewData);

  meals.forEach(meal => {
  meal.reviews = [];
  reviews.forEach(review => review.mealId === meal.id? meal.reviews.push(review): review)   
});

// Respond with the json for all the meals
route.get("/", (req, res) => {
  res.json(meals);
});

// Get meals that has a price smaller than maxPrice ----Example: /meals?maxPrice=90
route.get("/price?", (req, res) => {
  const {maxPrice} = (req.query);
  console.log(req.query);
  const mealReviewPrice = meals.filter(meal => {
    return meal.price <= parseInt(maxPrice)});
  res.send(mealReviewPrice);
});
// Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
route.get("/food?", (req, res) => {
  const {title} = req.query;
  console.log(req);
  const mealReviewTitle = meals.filter(meal => {
    return meal.title.toLowerCase().includes(title.toLowerCase());
  });
  res.send(mealReviewTitle);
});
//Get meals that has been created after the date
route.get("/date?", (req, res) => {
  const {createdAfter} = req.query;
  console.log(req.query);
  const mealCreatedAfter = meals.filter(meal => {
    return new Date (meal.createdAt) > new Date (createdAfter);
  });
  res.send(mealCreatedAfter);
});
// Only specific number of meals
route.get("/meals_limit?", (req,res) => {
  const {limit} = (req.query);
  console.log(req.query);
  const mealsLimit = meals.slice(0, limit);
  res.send(mealsLimit);
})
// Respond with the json for the meal with the corresponding id
route.get("/:id", (req, res) => {
  const {id} = (req.params);
  console.log(req.params);
  const ID = parseInt(id);
  const mealReviewId = meals.filter(meal => {
    return meal.id === ID;
  });
  
  //What if there is no meal with the requested id in meals.json?
  if (mealReviewId.length < 1)
    res.status(404).send("The meal with given ID was not found");
  
  res.send(mealReviewId);
});
module.exports = route;
