// Event application

function getEventWeekday(days) {
    const today = new Date();
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todaysDayAndDate = week[today.getDay()] + ' ' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const eventDay = (today.getDay() + days % 7) % 7;
    return (`Today is ${todaysDayAndDate} and the event is in ${days} days. Therefore the event will be held on a ${week[eventDay]}`);
}
console.log(getEventWeekday(24));
