const express = require("express");
const mealsRouter = require("./routes/meals.js");
const app = express();
app.get("/meals", mealsRouter);
app.listen(3000, () => console.log("server starting at port 3000"));