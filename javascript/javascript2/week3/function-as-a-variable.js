//Function as a variable

//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const func1 = () => {
    console.log('function1');
}
const func2 = () => {
    console.log("function2");
}
const func3 = () => {
    console.log("function3");
}
const arr = [func1(), func2(), func3()];
arr.forEach((func) => {
    return func;
})


//Create a function as a const and try creating a function normally. Call both functions.
const happyFunc = () => {
    console.log('Happy Function');
}
function sadFunc() {
    console.log('Sad Function');
}
happyFunc();
sadFunc();


//Create an object that has a key whose value is a function. Try calling this function.
const object = {key : happyFunc()};
object.key;