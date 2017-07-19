

///specify which url/api you are getting info from
//get request

     document.getElementById("search").addEventListener("keyup", function(e){
         console.log(e);
         //if enter execute

         if(e.key==="Enter"){
             search(e.target.value)
         }

         //write search function which makes the api call
     })

     let search=(input) =>{

    
    axios.get(`http://swapi.co/api/people/${input}`)
  .then(function (response) {
 
      document.getElementById("name").innerHTML=response.data.name;
        document.getElementById("birth-year").innerHTML=response.data.birth_year;
          document.getElementById("gender").innerHTML=response.data.gender;
    console.log(response);
  });
}

  