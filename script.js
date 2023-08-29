const daysElement =document.getElementById('days');
const hoursElement =document.getElementById('hours');
const minutesElement =document.getElementById('minutes');
const secondsElement =document.getElementById('seconds');

const newDate = "13 Oct 2023, 17:00";

function countdown () {
    const currentDate =new Date();
    const newDate2 = new Date(newDate);

    const totalSeconds =(newDate2 - currentDate)/ 1000;

    if (totalSeconds >= 0) {

    const days = Math.floor(totalSeconds / 3600 / 24); /* Math.floor sets full number */
    const hours = Math.floor(((totalSeconds/3600) % 24)); /* Module for hours here, how much is left until 24 is full */
    const minutes = Math.floor(totalSeconds/60) % 60; /* Module for minutess here, how much is left until 60 is full*/
    const seconds = Math.floor(totalSeconds) % 60;                 /* How much until 60 left */

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);

    } else {
    daysElement.innerHTML = 0;
    hoursElement.innerHTML = 0;
    minutesElement.innerHTML = 0;
    secondsElement.innerHTML = 0;
    };
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;         /* if less than 10 time period remaining, show 0 infront */
}

//Initial call to get Miliseconds until New Years
countdown();

//get Seconds until New Years
setInterval(countdown, 1000);

