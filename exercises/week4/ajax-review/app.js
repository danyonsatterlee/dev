

var createName = function(name){
  var div = document.createElement("div");
  div.innerHTML=name;
  document.getElementById('character').appendChild(div);


};

  var getPerson=function(num){

    axios.get('http://swapi.co/api/people/'+num).then(function (response) {
      // console.log(response.data);
      // starWarsName(response.data.name);
      createName(response.data.name);

    })
    .catch(function (error) {
      console.log(error);
    });

  };
for(var i=1; i<89;i++){
    getPerson(i);
}
