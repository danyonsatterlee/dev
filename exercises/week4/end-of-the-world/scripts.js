// Set a valid end date.
// Calculate the time remaining.
// Convert the time to a usable format.
// Output the clock data as a reusable object.
// Display the clock on the page, and stop the clock when it reaches zero.


function myTimer(duration, display) {
  var timer = duration, seconds;
  setInterval(function () {

    seconds = parseInt(timer % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = "00:" + seconds;

    if (--timer <= 0 ) {
clearInterval(myTimer);
  timer = "00"



      // timer = duration;
    }
  }, 1000);
};

window.onload = function () {
  var twentySeconds = 20,
  display = document.querySelector('#time');
  myTimer(twentySeconds, display);
}
