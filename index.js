function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = document.getElementById("ampm");

  if (hrs >= 12) {
    session.innerHTML = "AM";
  } else {
    session.innerHTML = "PM";
  } //am pm session

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  hrs = hrs < 10 ? "0" + hrs : hrs; //adding 0 to hours
  min = min < 10 ? "0" + min : min; //adding 0 to hours
  sec = sec < 10 ? "0" + sec : sec; //adding 0 to hours

  document.getElementById("hour").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}

setInterval(displayTime, 1000);
