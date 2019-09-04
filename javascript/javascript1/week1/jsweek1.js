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
if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYear * 7} dog years old in 2027`);
}
else {
    console.log(`Your dog will be ${dogYear} human years old in 2027`);
}


//Housey pricey (A house price estimator)
const houseCost = [2500000, 1000000];
const volumeInMeters = [[8 * 10 * 10], [5 * 11 * 8]];
const gardenSizeInM2 = [100, 70];
const housePrice = [volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300, volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300];
const rightPrice = [[`Peter's house price: ${housePrice[0]} and paying price: ${houseCost[0]}`], [`Julia's house price: ${housePrice[1]} and paying price: ${houseCost[1]}`]]
console.log(`${rightPrice[0]}, he is paying too much.`);
console.log(`${rightPrice[1]}, she is paying too little.`);


//Ez Namey (Startup name generator) Optional
const firstWords = ["Easy", "Awesome", "Corporate", "Pretty", "Company", "Passion", "Coding", "Animation", "Creative", "Logic"];
const secondWords = ["User", "Developer", "Talent", "Stages", "View", "Possible", "Script", "Information", "Tools", "Message"];
const randomNumber1 = Math.floor(Math.random() * firstWords.length);
const randomNumber2 = Math.floor(Math.random() * secondWords.length);
const startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];
const uniqueStartupNames = firstWords.length * secondWords.length; // Extra thought experiment
console.log(`The startup: ${startupName} contains ${startupName.length} characters`);
console.log(`Total unique startupnames: ${uniqueStartupNames}`); //output is 100
