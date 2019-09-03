//Age calculator
const yearOfBirth = 1987;
const yearFuture = 2027;
console.log(typeof (yearOfBirth))
const age = yearFuture - yearOfBirth;
console.log(`You wiil be ${age}` + ' ' + `years old in ${yearFuture}`);


// Goodboy - Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears == true) {
    console.log(`Your dog will be ${dogYear * 7} dog years old in 2027`);
}
else {
    console.log(`Your dog will be ${dogYear} human years old in 2027`);
}


//Housey pricey (A house price estimator)
const houseCost = [2500000, 1000000];
const volumeInMeters = [[8 * 10 * 10], [5 * 11 * 8]];
const gardenSizeInM2 = [100, 70];
peterHousePrice = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
console.log(`The right price of peter's house is ${peterHousePrice} but the house price is ${houseCost[0]} so, he is paying too much`);
juliaHousePrice = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;
console.log(`The right price of julia's house is ${juliaHousePrice} but the house price is ${houseCost[1]} so, she is paying too little`);


//Ez Namey (Startup name generator) Optional
const firstWords = ["Easy", "Awesome", "Corporate", "Pretty", "Company", "Passion", "Coding", "Animation", "Creative", "Logic"];
const secondWords = ["User", "Developer", "Talent", "Stages", "View", "Possible", "Script", "Information", "Tools", "Message"]
const startupName = firstWords[Math.floor(Math.random() * 10) + 0] + " " + secondWords[Math.floor(Math.random() * 10) + 0];
console.log(`The startup: ${startupName} contains ${startupName.length} characters`);