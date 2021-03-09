function realtimeClock(){
  var rtclock=new Date();
  var hours=rtclock.getHours();
  var minutes=rtclock.getMinutes();
  var second=rtclock.getSeconds();


  //add AM and PM system
  var amPM=(hours<12)?"AM" :"PM";

  //converts hours format to 12 hours
  hours=(hours>12)?hours-12:hours;

  //Pad the hours,minutes and seconds with the leading zeroes
  hours=("0" + hours).slice(-2);
  minutes=("0" +minutes).slice(-2);
  second=("0" + second).slice(-2);

  //display the clock
  document.getElementById("clock").innerHTML=
     hours +"  :  "+minutes+"  :  "+second +" "+amPM;
var t=setTimeout(realtimeClock,1000)

}
