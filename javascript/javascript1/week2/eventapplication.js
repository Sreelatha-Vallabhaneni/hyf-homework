// Event application

function getEventWeekday(day) {
    const today = new Date();
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todaysDayAndDate = week[today.getDay()] + ' ' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const remainder = day % 7;
    const eventDay = (today.getDay() + remainder) % 7;
    return (`Today is ${todaysDayAndDate} and the event is in ${remainder} days. Therefore the event will be held on a ${week[eventDay]}`);
}
console.log(getEventWeekday(24));