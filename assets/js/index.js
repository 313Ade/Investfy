// var timer = 0;
// var timerInterval;
// var ms = document.getElementById('milliseconds');
// var second = document.getElementById('second');
// var minute = document.getElementById('minute');

// function start() {
//     stop()
//     timerInterval = setInterval(function() {
//         timer += 1/60;
//         msVal = Math.floor((timer - Math.floor(timer))*100);
//         secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
//         minuteVal = Math.floor(timer/60);
//         ms.innerHTML = msVal < 10 ? '0' + secondVal.toString() : msVal;
//         second.innerHTML = secondVal < 10 ? '0' + secondVal.toString() : secondVal;
//         minute.innerHTML = minuteVal < 10 ? '0' + minuteVal.toString() : minuteVal;

//     }, 1000/60);
// }

// function stop() {
//     clearInterval(timerInterval);
// }


var timer = 0;
var timerInterval;
var ms = document.getElementById('millisecond');
var second = document.getElementById('second');
var minute = document.getElementById('minute');

function start() {
  stop();
  timerInterval = setInterval(function() {
    timer += 1/60;
    msVal = Math.floor((timer - Math.floor(timer))*100);
    secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
    minuteVal = Math.floor(timer/60);
    ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
    second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
    minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
  }, 1000/60);
}

function stop() {
  clearInterval(timerInterval);
}

//object example
var person = {
  name = 'Jon Doe',
  age: 25,
  isMale: true,
  personality: ['patient', 'loyal', 'happy'],
  company: {name: 'edX', id: 2202}
}


