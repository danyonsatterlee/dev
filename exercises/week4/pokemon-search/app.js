document.getElementById('search').addEventListener("click", function(){
  var name = document.getElementById('pokemon-name').value
  name = name.toLowerCase();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/"+name);
  xhr.send();

  xhr.onreadystatechange= function(){
    var DONE = 4; //gotten all of the handshakes and got all the data
    var OK = 200; // 200 is successful returns look at CAT HTTP calls for more
    if(xhr.readyState == DONE){
      if(xhr.status == OK){
        var pokemon = JSON.parse(xhr.responseText)
        console.log(pokemon);
        //name
        var item = document.getElementById('name-pokemon');
        item.innerHTML= "Name: " + pokemon.name.toUpperCase();
        var base = document.createElement("p");
        //base experience
        base.innerHTML = "Base Experience: "+ pokemon.base_experience;
        item.appendChild(base);
        //height
        var height1 = document.createElement("p")
        height1.innerHTML = "Height: "+ pokemon.height +" ft";
        item.appendChild(height1);
        var weight1 = document.createElement("p")
        weight1.innerHTML = "Weight: "+ pokemon.weight +" lbs";
        item.appendChild(weight1);

      

        var image = document.createElement("img")
        image.innerHTML =  pokemon.front_default;
        item.appendChild(image);


      }else{
        console.log("ERR", xhr.status);
      }
    }
  };
});
