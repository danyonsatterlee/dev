var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createRadialGradient(75,50,5,30,40,100);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"green");
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
