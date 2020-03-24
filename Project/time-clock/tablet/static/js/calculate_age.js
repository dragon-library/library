 // Set the date we're counting down to
    
 var birth_day = "July 03, 2014 15:12:00";
 var BirthDate = new Date(birth_day).getTime();

 // Update the count down every 1 second
 var x = setInterval(function () {

   // Get today's date and time
   var now = new Date().getTime();

   // Find the distance between now and the count down date
   var distance = now-BirthDate;

   function zeroPadding(num, digit) {
     var zero = '';
     for (var i = 0; i < digit; i++) {
       zero += '0';
     }
     return (zero + num).slice(-digit);
   }

   // Time calculations for days, hours, minutes and seconds
   var year_age = Math.floor(distance / 31536000000);
   
   var day_age = Math.floor((distance % 31536000000) / 86400000);
   var month_age = Math.floor(day_age / 30);

     day_age = day_age % 30;
   var hour_age =  zeroPadding(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),2);
   var minute_age = zeroPadding(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),2);
   var second_age = zeroPadding(Math.floor((distance % (1000 * 60)) / 1000),2);

   // Output the result in an element with id="demo"
   // document.getElementById("demo").innerHTML = days + " วัน " + hours + " ชั่วโมง "
   //   + minutes + " นาที " + seconds + " วินาที ";
   document.getElementById("year_age").innerHTML = year_age;
   document.getElementById("month_age").innerHTML = month_age;
   document.getElementById("day_age").innerHTML = day_age;
   document.getElementById("hour_age").innerHTML = hour_age;
   document.getElementById("minute_age").innerHTML = minute_age;
   document.getElementById("second_age").innerHTML = second_age;
   document.getElementById("title_age").innerHTML = "ด.ช.พชรพล วงศ์สง่า [" + birth_day +' ]'; 
  

   // If the count down is over, write some text 
  
 }, 1000);