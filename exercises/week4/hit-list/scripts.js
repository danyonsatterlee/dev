var addVictim = function(image, name) {

  // var contain = document.createElement("div");
  // contain.setAttribute("class", "container");

  // var firstRow = document.createElement("div");
  // firstRow.setAttribute("class", "row");

  var hitHolders = document.createElement("div");
  hitHolders.setAttribute("class", "col-md-4");

  var hitBox = document.createElement("div");
  hitBox.setAttribute("class", "hit-box");
  //add image here
  hitBox.style.background="url('"+image+"')";
  hitBox.style.backgroundSize= "cover";
  hitBox.style.backgroundPosition= "center";




  var nameVictim = document.createElement("h1");
  nameVictim.setAttribute("class", "name");
  nameVictim.innerHTML=name;




  hitBox.appendChild(nameVictim);
  hitHolders.appendChild(hitBox);
  // firstRow.appendChild(hitHolders);
  // contain.appendChild

  document.querySelector("#first-row").appendChild(hitHolders);
};

// addVictim();
axios.get('http://api.vschool.io:6543/hitlist.json').then(function(response) {
  console.log(response.data);
  for(var i= 0; i < response.data.length; i++){
    addVictim(response.data[i].image, response.data[i].name);
  }
}).catch(function(err){
  console.log(err);
});

// var MainHitList= function (image, name){
//
//   this.image=image;
//   this.name=name;
//
//   this.print=function(){
//     console.log("name");
//   }
// };


// var hitArray=[];

// hitArray.push(new MainHitList()
