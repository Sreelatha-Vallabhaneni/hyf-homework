//translateOneByOne - Should translate the circles one at a time from their random start position to their target. Log something out after each element has been moved

function translateOneByOne(){
    moveElement(document.querySelector("li"), { x: 20, y: 300 })
    .then(() => {
        console.log("Red Element has been moved");
        return moveElement(document.querySelector(".marks > li:nth-child(2n)"),
        {x: 400, y: 300});
   })
   .then(() => {
        console.log("Blue Element has been moved");
        return moveElement(document.querySelector(".marks > li:nth-child(3n)"),{x: 400, y: 20})
   })
   .then(() => {
        console.log("Green Element has been moved");
        })   
}
translateOneByOne();

