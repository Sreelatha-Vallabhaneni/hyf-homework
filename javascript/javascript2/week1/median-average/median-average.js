
//Difference between median and average

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

// Find median
function findMedian(array) {
    const sortArray = array.sort((a, b) => a - b);//[ 1300000, 2100000, 3000000, 3500000, 8000000, 40000000, 100000000 ]
    const middle = Math.floor(array.length / 2);
    if (array.length % 2 !== 0) {
        return sortArray[middle]
    } else {
        return (sortArray[middle - 1] + sortArray[middle]) / 2;
    }
}
console.log(findMedian(housePrices));

// Find Average
function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    const average = sum / array.length; // 22557142.85714286
    return average;
}
console.log(findAverage(housePrices));
/*const sum = housePrices.reduce((previous, current) => current += previous); //157900000
const average = sum / housePrices.length;// 22557142.85714286
console.log(average);*/


// Median and average in an object
function object(median, average){
    const objAvgMedian = { Median: median, Average: average };
   return objAvgMedian; 
}
console.log(object(findMedian(housePrices), findAverage(housePrices))); //{ Median: 3500000, Average: 22557142.85714286 }

//Now render the prices and the average and median in a web page.
// create h1 and style the page
document.body.style.backgroundColor = 'lightpink';
const heading = document.createElement('h1');
heading.textContent = ' Find Median and Average from the following HousePrices';
document.body.appendChild(heading);
heading.style.color = 'blue';
heading.style.backgroundColor = 'orange';
//create ul and append to h1
const myUl = document.createElement('ul');
myUl.textContent = 'House Prices:';
heading.appendChild(myUl);
for (let i = 0; i < housePrices.length; i++) {
    const newli = document.createElement('li');
    newli.textContent = housePrices[i];
    myUl.appendChild(newli);
    newli.style.fontSize = '20px';
}
// create button for median
const btn = document.createElement('button');
btn.textContent = 'click for Median'; 
btn.className = 'button + font-color';
document.body.appendChild(btn);
const pTagMedian = document.createElement('p');
document.body.appendChild(pTagMedian);
pTagMedian.className = 'font-color';
btn.addEventListener('click', function() {
    pTagMedian.textContent = findMedian(housePrices);   
});

// create button for average
const btn1 = document.createElement('button');
btn1.textContent = 'click for Average';
btn1.className = 'button + font-color';
document.body.appendChild(btn1);
const pTagAverage = document.createElement('p');
document.body.appendChild(pTagAverage);
pTagAverage.className = 'font-color';
btn1.addEventListener('click', function () {
    pTagAverage.textContent = findAverage(housePrices);
});
