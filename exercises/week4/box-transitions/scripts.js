document.querySelector(".box").addEventListener("mouseover", function() {
  this.style.backgroundColor = "#689F38";
  this.className = "box box-change";
});


document.querySelector(".box").addEventListener("mouseleave", function() {
  this.style.backgroundColor = "#faef57";
    this.className = "box box-height";
    var audio = $("#whistle")[0];
  audio.play();

});
