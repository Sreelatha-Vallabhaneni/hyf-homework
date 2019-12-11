const express = require("express");
const route = express();
const mealsData = require("./routes/meals.js");
const reviews = require("./routes/reviews.js");
const reservations = require("./routes/reservations.js");


// middleware the logs the the date and the request's method, each time the serve gets a request.
route.use((req, res, next) => {
  console.log("method: " + req.method);
  next();
});
route.use((req, res, next) => {
  const date = new Date();
  const time = date.getFullYear() + '-' + (date.getMonth() +
    1) + '-' + date.getDate() + ' ' + date.getHours() + ':'+ date.getMinutes() + ':' +date.getSeconds() + ` request received for path: ${
    req.url}`;
  console.log(time);
  next();
});


route.use("/meals", mealsData);
route.use("/api/meals", mealsData);
route.use("/reviews", reviews);
route.use("/reservations", reservations);

//assigning port
const port =  4000;
route.listen(port, () => console.log(`server starting at port ${port}`));


