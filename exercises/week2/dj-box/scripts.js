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



  // window.addEventListener("keypress", function(event){
  //   if (event.which===82){
  //     document.getElementById('biggestBox').style.backgroundColor="red";
  //   } else if (event.which===82){
  //   document.getElementById('biggestBox').style.backgroundColor="green";
  //   }
  //   else if (event.which===82){
  //       document.getElementById('biggestBox').style.backgroundColor="blue";
  //   } else if (event.which===82){
  //       document.getElementById('biggestBox').style.backgroundColor="green";
  //   }
  //
  //
  // });








  // function randomKey(){
  //   var keyBox= document.getElementsByClassName('lilBox');
  //
  //   for (var i=0; i<keyBox.length; i++)
  //   var randomize = Math.random(keyBox[i]);
  //   console.log(randomize);
  //   if (82===e.keycode){
  //     randomize.style.backgroundColor="red";
  //   } else if (71===e.keycode){
  //     randomize.style.backgroundColor="green";
  //   }
  //   else if (66===e.keycode){
  //     randomize.style.backgroundColor="blue";
  //   } else if (89===e.keycode){
  //     randomize.style.backgroundColor="green";
  //   }
