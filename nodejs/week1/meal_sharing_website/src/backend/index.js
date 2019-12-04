const express = require("express");
const app = express();
const mealsData = require("./routes/meals.js");
const cheapMeals = require("./routes/cheap-meals.js");
const largeMeals = require("./routes/large-meals.js");

app.use("/meals", mealsData);
app.use("/cheapmeals", cheapMeals);
app.use("/largemeals", largeMeals);

app.listen(3000, () => console.log("server starting at port 3000"));


