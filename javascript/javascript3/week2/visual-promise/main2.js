//translateAllAtOnce - Should translate all the circles at the same time from their random start position to their target. Log out something after all elements have been moved

function translateAllAtOnce() {
  const redTarget = moveElement(
    document.querySelector("li"), 
    { x: 20, y: 300 });
  const blueTarget = moveElement(
    document.querySelector(".marks > li:nth-child(2n)"),
    { x: 400, y: 300 });
  const greenTarget = moveElement(
    document.querySelector(".marks > li:nth-child(3n)"),
    { x: 400, y: 20 });

  Promise.all([redTarget, blueTarget, greenTarget]).then(() =>
    console.log(
      " Red Element has been moved",
      "\n",
      "Blue Element has been moved",
      "\n",
      "Green Element has been moved"));
}
translateAllAtOnce();
