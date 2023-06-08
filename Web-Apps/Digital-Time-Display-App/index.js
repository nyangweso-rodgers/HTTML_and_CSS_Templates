

// program to display current date and time every second
const myTime = setInterval(myTimer, 1000);

const dateAndTime = document.getElementById('displayDateTime');
const date = document.getElementById('displayDate');
const time = document.getElementById('displayTime');

function myTimer() {
    
    // return new date and time
    let dateTime = new Date();
    let yy = dateTime.getFullYear();
    let mm = dateTime.getMonth() + 1;
    let dd = dateTime.getDate();
    
    let hh = dateTime.getHours();
    let min = dateTime.getMinutes();
    let ss = dateTime.getSeconds();

    //

    // display datetime in one line
    dateAndTime.innerHTML = dateTime;
    // date.innerHTML = yy + "-" + mm + "-" + dd;
    // y.innerHTML = hours; // 
    //time.innerHTML = hh + ":" + min + ":" + ss;
}