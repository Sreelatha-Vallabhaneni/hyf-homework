const express = require("express");
const route = express();
const port = 3000;

route.get("/numbers/add/:first/:second", (req,res) => {
    const { first, second } = (req.params);
    console.log(req.params);
    const sum = parseInt(first) + parseInt(second);
    res.send(`sum = ${sum}`);    
}) // request URL is localhost:3000/numbers/add/3/7 and O/P is sum = 10.

route.get("/numbers/multiply", (req, res) => {
    const {first, second} = (req.query);
    console.log(req.query);
    const multiply = parseInt(first) * parseInt(second);
    res.send(`Multiplication = ${multiply}`);
}) // request URL is localhost:3000/numbers/multiply?first=3&second=7 and O/P is Multiplication = 21.

route.listen(port, () => console.log(`server start at port ${port}`));