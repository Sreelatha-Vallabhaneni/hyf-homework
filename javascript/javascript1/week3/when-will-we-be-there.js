
//#**********************When will we be there??***************************
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
function calculateTime() {
    const time = travelInformation.destinationDistance / travelInformation.speed; //8.64
   // const timeIntoMinutes = time * 60; //518.4000000000001
    //const hours = (timeIntoMinutes / 60); // 8.640000000000002
    const rhours = Math.floor(time); //8
    const minutes = (time - rhours) * 60; // 38.40000000000014
    const rminutes = Math.round(minutes); // 38
    return  rhours + " hour(s) and " + rminutes + " minute(s).";
}
const travelTime =  calculateTime(travelInformation);
console.log(travelTime);  // 8 hour(s) and 38 minute(s).