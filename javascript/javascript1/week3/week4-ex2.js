// Voice Assistant
const stringArr = [];
const myTodoList = [];
const favDishList = [];
const event = [];
function getReply(command) {
    const duplicateArr = ['Hello', 'my', 'name', 'is', 'namestring'];
    //const regularExpression = command.replace(/[^\w]/g, ""); 
    const splitString = command.toLowerCase().split(' ');
    const command1 = command.startsWith('Hello', 0);
    //******************* Hello/Greetings *******************/
    if (command1 === true && splitString.length == duplicateArr.length) {
        stringArr.push(splitString);
        return `Nice to meet you ${stringArr[0][4]}`;
    } else if (command1 === true && stringArr != 0) { //console.log(stringArr);
        return `Hey ${stringArr[0][4]} You repeated your name twice`;
    } else if (command === 'What is my name?') {
        return `your name is ${stringArr[0][4]}`;
    }
    /******************** Todo list *****************************/

    //              Add todo list 
    else if (command.includes('to my todo')) {
        const grabTodo = splitString.slice(1, -3);
        myTodoList.push(grabTodo.join(' '));
        //console.log(myTodoList);
        return `Added ${grabTodo.join(' ')} to your todo`;
    }
    //           Todo List
    else if (command === 'What is on my todo?') {
        return myTodoList;
    }
    //     Remove from Todo
    else if (command.startsWith('Remove', 0)) {
        const grabRemoveTodo = splitString.slice(1, -3);
        myTodoList.splice(grabRemoveTodo.join(' '));
        return `Removed ${grabRemoveTodo.join(' ')} from your todo`;
    }
    //************************* What day is it today? **************************/

    else if (command.includes('today')) {
        //console.log(splitString);
        const today = new Date();
        const todaysDate = today.getDate(); // present date
        const year = today.getFullYear(); //2019
        const objDate = new Date().toLocaleString("en-us", { month: "long" });// september
        return `Today is ${todaysDate}. of ${objDate} ${year}`;
    }
    //********************************* Simple math *********************************/

    else if (command.startsWith('sum', 0)) {
        const a = splitString.slice(-1).join(' ');
        const b = splitString.slice(2, 3).join(' ');
        const sum = (parseInt(a) + parseInt(b));
        return sum;
    }
    //************************ favorite dish ***************************/

    else if (command.startsWith('My favorite', 0)) {
        favDishList.push(splitString);
        favDishList.splice([0][4], 1, "Lasagne");
        return `Saved favorite dish as ${favDishList}`;
    }
    //             What is my favorite dish?
    else if (command === 'What is my favorite dish?') {
        return `Your favourite dish is ${favDishList[0]}.`;
    }
    //*********************** Set a timer for 4 minutes *******************************/
    else if (command.includes('timer for 4 minutes')) {
        const minutes = splitString.slice(-2, -1);
        const milliSeconds = parseInt(minutes) * 60000;
        const setTime = setTimeout(timer, milliSeconds);
        function timer() {
            console.log('Timer Done');
        }
        clearTimeout(setTime);
        return `Timer set for ${minutes} minutes.`;
    }
    //************************* What am i doing this week? ***********************/
    else if (command.includes('what am i doing this week')) {
        return `This week you have ${event.length} events.`;
    }
    // ************************* my calendar ***********************
    else if (command.search('Add to my calender')) {
        const ride = splitString.slice(1, -5).join(' ');
        const name = ride;
        const date = splitString.slice(4, -3).join(' ');
        event.push({ Name: name, Date: date });
        //console.log(event);
        return `${ride.toUpperCase()} added to your calender`;
    }
}

console.log(getReply('Hello my name is sreelatha'));    // Nice to meet you sreelatha
console.log(getReply('Hello my name is sreelatha, Hello my name is sreelatha')); //Hey sreelatha You repeated your name twice
console.log(getReply('What is my name?')); //your name is sreelatha
console.log(getReply('Add fishing to my todo')); // Added fishing to your todo
console.log(getReply('Add singing in the shower to my todo')); // Added singing in the shower to your todo
console.log(getReply('What is on my todo?'));// [ 'fishing', 'singing in the shower' ]
console.log(getReply('Remove fishing from my todo')); // Removed fishing from your todo
console.log(getReply('Remove singing in the shower from my todo')); // Removed singing in the shower from your todo
console.log(getReply('What day is it today?'));// Today is 25. of September 2019
console.log(getReply('sum of 3 and 3')); // 6
console.log(getReply('My favorite dish is spaghetti')); // [ 'Lasagne' ]
console.log(getReply('What is my favorite dish?'));// your favourite dish is Lasagne.
console.log(getReply('Set a timer for 4 minutes')); // Timer set for 4 minutes.
console.log(getReply('Add Bike ride the 3/5-2019 to my calendar')); // BIKE RIDE added to your calender
console.log(getReply('Add HyF study group the 26/9-2019 to my calendar'));// HYF STUDY GROUP added to your calender.
console.log(getReply('Add visit copenhagen the 28/9-2019 to my calendar'));// VISIT COPENHAGEN added to your calender
console.log(getReply('what am i doing this week')); //This week you have 3 events.


// from class work
// fizz buzz  
function fizzbuzz(fizz, buzz) {
    const arr = new Array(100);
    for (let i = 0; i < 100; i++) {
        arr[i] = i + 1;
    }
    for (let i = 1; i < arr.length + 1; i++) {
        if (i % fizz && i % buzz) {
            console.log(i);
        }
        else {
            if (i % fizz == 0) {
                console.log('fizz');
            }
            if (i % buzz == 0) {
                console.log('buzz');
            }
        }
    }
}
fizzbuzz(4, 12);

//Build a sentiment analyzer
function getSentimentScore(text) {
    text.toLowerCase().split(' ');

}




