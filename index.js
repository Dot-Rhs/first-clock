//var's for Id selector
//get a date
//Get the seconds
//apply seconds to second hand
//work out how much it rotates a sec (6deg?)
//apply transform.rotate

var secondHand = document.getElementById("secs");

function startClock() {
  var i = 0;
  var seconds = setInterval(function() {
    console.log(i);
    i++;
  }, 1000);
}

startClock();
