

// calculate number of years from 1970/01/01:
const second = 1000 // Milliseconds
const minute = second * 60; 
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let d = document.getElementById("dd");
let h = document.getElementById("hh");
let m = document.getElementById("mm");
let s = document.getElementById("ss");

let displayRemainingTimeFunction = function displayRemainingTime(targetDate) {

    let updateDisplayFunction = function () {
        // calculate remaining time in milliseconds
        let remainingTime = new Date(targetDate) - new Date();

        if (remainingTime <= 0) {
            // stop the timer
            clearInterval(timerID);
            // perform any desired action when the target date is reached
            d.innerHTML = "Target Reached";
            return;
        };

        // calculate remaining time
        let remainingSeconds = Math.floor(remainingTime / second);
        let remainingMinutes = Math.floor(remainingTime / minute);
        let remainingHours = Math.floor(remainingTime / hour);
        let remainingDays = Math.floor(remainingTime / day);

        // Update the content of the elements
        d.innerHTML = remainingDays;
        h.innerHTML = remainingHours;
        m.innerHTML = remainingMinutes;
        s.innerHTML = remainingSeconds;

    };

    // initial display
    updateDisplayFunction();

    // update display function every 1 seconds
    setInterval(updateDisplayFunction, 1000);
};

let targetDate = "2023-06-14"; // Replace with your specific target date

displayRemainingTimeFunction(targetDate);