var colorBox= document.getElementsByClassName('lilBox');
for (var i=0; i<colorBox.length; i++) {
  colorBox[i].addEventListener("mouseover", function(){
    this.style.backgroundColor = "blue";

  });
  colorBox[i].addEventListener("mousedown", function(){
    this.style.backgroundColor = "red"
  });
  colorBox[i].addEventListener("mouseup", function(){
    this.style.backgroundColor = "yellow"
  });
  colorBox[i].addEventListener("dblclick", function(){
    this.style.backgroundColor = "green"
  });
}
var orange = document.getElementById('biggestBox');
window.addEventListener('scroll', function(){
  orange.style.backgroundColor="rgb(215, 145, 24)";
  });

var keyColor
//
