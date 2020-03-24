// Type Script
var i = 0;
var txt = "กรุณาเลือกทำรายการจากเมนูด้านซ้าย";
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("start_title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}




// Set the date we're counting down to
    var countDownDate = new Date("Jan 11, 2020 08:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      function zeroPadding(num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      }

      // Time calculations for days, hours, minutes and seconds
      var days =  Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours =  zeroPadding(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),2);
      var minutes = zeroPadding(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),2);
      var seconds = zeroPadding(Math.floor((distance % (1000 * 60)) / 1000),2);

      // Output the result in an element with id="demo"
      // document.getElementById("demo").innerHTML = days + " วัน " + hours + " ชั่วโมง "
      //   + minutes + " นาที " + seconds + " วินาที ";
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
      document.getElementById("demo").innerHTML = '(' + days +'วัน) '+ hours + ":" + minutes + ":" + seconds;

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        
        
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
      "November", "December"
    ];


    var timerID = setInterval(updateTime, 1000);
    updateTime();

    function updateTime() {

      document.getElementById("time_now").innerHTML = "";
      var tnow = new Date();
      var today = tnow.toDateString();
      var time = tnow.toLocaleTimeString();
      var hrs = zeroPadding(tnow.getHours(), 2);
      var min = zeroPadding(tnow.getMinutes(), 2);
      var sec = zeroPadding(tnow.getSeconds(), 2);

      var day_names = week[tnow.getDay()];
      var month_nows = months[tnow.getMonth()];
      var date_nows = tnow.getDate();

      function zeroPadding(num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      }

      document.getElementById("day_name").innerHTML = day_names;
      document.getElementById("month_now").innerHTML = month_nows;
      document.getElementById("date_now").innerHTML = date_nows;

      document.getElementById("time_now").innerHTML = hrs + ':' + min + ':' + sec;
    }