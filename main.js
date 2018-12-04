var timeElement = document.querySelector("time");
var timestamp = timeElement.getAttribute("datetime");
var endDate = new Date(timestamp).getTime();

renderRemaining();

setInterval(renderRemaining, 1000);

function renderRemaining() {
  var startDate = new Date().getTime();
  var timeRemaining = (endDate - startDate) / 1000;

  // Cancel operation if the time difference is less than zero. Prevents the clock
  // from going negative
  if (timeRemaining < 0) return;

  var days = Math.floor(timeRemaining / 86400);
  timeRemaining = timeRemaining % 86400;

  var hours = zeroFormat(Math.floor(timeRemaining / 3600));
  timeRemaining = timeRemaining % 3600;

  var minutes = zeroFormat(Math.floor(timeRemaining / 60));
  timeRemaining = timeRemaining % 60;

  var seconds = zeroFormat(Math.floor(timeRemaining));

  var string = days + ":" + hours + ":" + minutes + ":" + seconds;

  timeElement.innerText = string;
}

function zeroFormat(num) {
  return String(num).padStart(2, "0");
}

