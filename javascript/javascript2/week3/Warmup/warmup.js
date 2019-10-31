
// 1.  Log out the text "Called after 2.5 seconds" 2.5 seconds after the script is loaded.
setTimeout(() => {
    console.log("1. Called after 2.5 seconds");    
}, 2500);

// 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
const setTime = (delay, stringToLog) => {
    setTimeout(() => {
    pTag.textContent = stringToLog;
    console.log(stringToLog);     
    }, delay);
}
setTime(5000, "2. This string logged after 5 seconds");
setTime(3000, "2. This string logged after 3 seconds");

// 3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const myButton = document.createElement('button')
myButton.textContent = 'Click Me!';
document.body.appendChild(myButton);
const pTag = document.createElement('p');
document.body.appendChild(pTag);
//pTag.textContent = stringToLog;
myButton.addEventListener('click', () => setTime(3000, "3. Called after 3 seconds"));
// 4. Eart, Saturn and PlanetLogFunctions....
const earthLogger = () => console.log("4. Earth");
const saturnLogger = () => console.log("4. Saturn");
const PlanetLogFunction = (logger) => logger();
/*{ if(logger === earthLogger){ 
    return earthLogger()
 } else if(logger == 'saturnLogger'){
     return saturnLogger() 
    }
});*/
PlanetLogFunction(earthLogger);
PlanetLogFunction(saturnLogger);
// 5. 
const locationButton = document.createElement('button'); // create button
const pStatus = document.createElement('p'); // create 'p' tag
const aTag = document.createElement('a').target = "_blank";// create 'a' tag with target
locationButton.textContent = 'Log Location';
document.body.appendChild(locationButton);
document.body.appendChild(pStatus);
const getLocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        pStatus.textContent = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position){
    const latitude1 = position.coords.latitude;
    const longitude1 = position.coords.longitude;
    pStatus.textContent = `This is the Latitude: ${latitude1}, and  This is the Longitude: ${longitude1}`;
    /*const  map = new google.maps.Map(document.getElementById("#map"), {
         center: { latitude1: `${latitude1}`, longitude1: `${longitude1}` },
         zoom: 8
       });
    document.getElementById("map").textContent = map;*/
}
locationButton.addEventListener('click', getLocation);
//6 
function renderLocationOnGoogleMap(lat, lng) {
  const mapDiv = document.querySelector('#map');
  const map = new google.maps.Map(mapDiv, {
    center: { lat, lng },
    zoom: 12
  });

  console.log(map);
}
//7.Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions.
const runAfterDelay = (delay, callback) => setTimeout(callback, delay);
const func1 = () => {
    console.log('7. should be logged after 4 seconds');
}
runAfterDelay(4000, func1);
runAfterDelay(4800, earthLogger);
// 8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
const doubleClickButton = document.createElement('button');
document.body.appendChild(doubleClickButton);
doubleClickButton.textContent = 'Double Click';
const pTagDouble = document.createElement('p');
document.body.appendChild(pTagDouble);
const logOutText = () => {
  console.log(pTagDouble.textContent = "Double Click");
  doubleClickButton.removeEventListener("click", logOutText);
};
function doubleClick() {
  doubleClickButton.removeEventListener("click", doubleClick);
  doubleClickButton.addEventListener("click", logOutText);
  setTimeout(function() {
    doubleClickButton.removeEventListener("click", logOutText);
    doubleClickButton.addEventListener("click", doubleClick);
  }, 500);
}
doubleClickButton.addEventListener("click", doubleClick);
// 9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){    
    if(shouldTellFunnyJoke === true){        
    logFunnyJoke();    
    } else{
    logBadJoke();
    }
}
const logFunnyJoke = () => {    
    console.log("9. Funny Joke");
}
const logBadJoke = () => {    
    console.log("9. Bad Joke");    
}
jokeCreator(true, logFunnyJoke, logBadJoke);

