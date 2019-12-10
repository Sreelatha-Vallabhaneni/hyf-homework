const express = require("express");
const route = express();
const mealsData = require("./routes/meals.js");
const reviews = require("./routes/reviews.js");
const largeMeals = require("./routes/large-meals.js");
const randomMeal = require("./routes/meal.js");
const reservations = require("./routes/reservations.js");
const randomReservation = require("./routes/reservation.js");

// middleware the logs the the date and the request's method, each time the serve gets a request.
route.use((req, res, next) => {
  console.log("method: " + req.method);
  next();
});
route.use((req, res, next) => {
  console.log("date: " + Date.now());
  next();
});


route.use("/meals", mealsData);
//route.use("/api/meals", mealsData)
route.use("/reviews", reviews);
route.use("/largemeals", largeMeals);
route.use("/randommeal", randomMeal);
route.use("/reservations", reservations);
route.use("/random_reservation", randomReservation);

//assigning port
const port =  4000;
route.listen(port, () => console.log(`server starting at port ${port}`));


