





function time() {
  var d = new Date();
  // var time = document.getElementById("time");
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = days[d.getDay()];
  var hour = d.getHours().toString();
  var min = d.getMinutes().toString();
  var sec = d.getSeconds().toString();
  console.log(typeof day);
  document.getElementById("day").innerHTML = "Today is : " + day ; 
  document.getElementById("time").innerHTML = ("The Current time is: "+ hour + ":" + min + ":" + sec);

};

time();
