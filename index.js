var countDownDate = new Date("Jan 5, 2022").getTime();
var days = document.getElementById("days");;
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);
  if(String(d).length===1 )
  {
      d="0"+d;
  }
  if(String(h).length===1 )
  {
      h="0"+h;
  }
  if(String(m).length===1 )
  {
      m="0"+m;
  }
  if(String(s).length===1 )
  {
      s="0"+s;
  }
  // Display the result in the element with id="demo"
    days.innerHTML=d;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);