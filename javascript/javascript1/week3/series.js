
//Series duration of my life
const seriesDurations = [
    {
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: 'Sopranos',
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: 'The Wire',
        days: 2,
        hours: 12,
        minutes: 0,
    }
]
function addSeries(title, days, hours, minutes)
{
    //seriesDurations.push({});
    const seriesObj = {};
    seriesObj.title = title;
    seriesObj.days = days;
    seriesObj.hours = hours;
    seriesObj.minutes = minutes;
    seriesDurations.push(seriesObj);
}
addSeries('Americas got talent', 1, 12, 50);
console.log(seriesDurations);
const avgLifeSpan = 80;
const calLifeSpanInMinutes = avgLifeSpan * 365 * 24 * 60; //42048000
totalTime = 0;
for (var i = 0; i < seriesDurations.length; i++) {
    const calSeriesInMinutes = seriesDurations[i].days * 24 * 60 + seriesDurations[i].hours * 60 + seriesDurations[i].minutes;  // 4380, 5160, 3600, 2210.
    const calPercentage = (calSeriesInMinutes / calLifeSpanInMinutes) * 100;
    console.log(seriesDurations[i].title + " took " + calPercentage.toFixed(3) + "% of my life.")
    totalTime += calSeriesInMinutes;
}
let seriesDurationsTotalPct = (totalTime / calLifeSpanInMinutes) * 100;
console.log("In total that is " + seriesDurationsTotalPct.toFixed(3) + "% of my life.")