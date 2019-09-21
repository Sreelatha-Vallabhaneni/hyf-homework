
//CactusIO - interactive(Smart phone usage app) optional
// Adding an activity
const activities = [];
const today = new Date();//extra task- automatically figures out what the date and day is
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const todaysDayAndDate = week[today.getDay()] + ' ' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
const date = todaysDayAndDate;
function addActivity(date, activity, duration) 
{
    //activities.push({date, activity, duration});
    
    const activeObj = {};
    activeObj.dayAndDate = date;
    activeObj.activity = activity;
    activeObj.duration = duration;
    activities.push(activeObj);

}
addActivity(date, 'youtube', 30);
addActivity(date, 'facebook', 30);
addActivity(date, 'linkedin', 40);
console.log(activities);

// Show my status
function showStatus()
{
    let sum = 0;
    if (activities.length === 0)
    {
        return "Add some activities before calling showStatus."
    }
    else if (activities)
    {              
        for (let i = 0; i < activities.length; i++){
            sum += activities[i].duration;
        }          
        if (sum >= 160) {       //// Usage limit
        return 'You have reached your limit, no more smartphoning for you!';
        }
        return 'you have added' + ' ' + activities.length + ' ' + 'activities.' + 'They amount to' + ' ' + sum + ' ' + 'min. of usage.';
    }
}
console.log(showStatus()); 



