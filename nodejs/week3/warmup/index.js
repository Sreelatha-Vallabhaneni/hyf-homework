const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.get("/calculator/addition", (req, res) => {
    const arr = [];
    const newArr = arr.concat.apply(arr, Object.values(req.query)).map(element => parseInt(element));   
    const result = newArr.reduce((sum, num) => (sum += num), 0);
    console.log(req.query);
    console.log( newArr );
    res.send(`Addition is ${result}`);
});
app.get("/calculator/subtraction", (req, res) => {
  const arr = [];
  const newArr = arr.concat.apply(arr, Object.values(req.query)).map(element => parseInt(element));
  const result = newArr.reduce((sum, num) => sum -= num);
  res.send(`Subtraction is ${result}`);
});
app.get("/calculator/multiplication", (req, res) => {
  const arr = [];
  const newArr = arr.concat.apply(arr, Object.values(req.query)).map(element => parseInt(element));
  const result = newArr.reduce((sum, num) => sum *= num);
  res.send(`Multiplication is ${result}`);
});
app.get("/calculator/division", (req, res) => {
  const arr = [];
  const newArr = arr.concat.apply(arr, Object.values(req.query)).map(element => parseInt(element));
  const result = newArr.reduce((sum, num) => sum /= num);
  res.send(`Division is ${result}`);
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server starting at port ${port}`));
