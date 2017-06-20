myArray = [1,2,3,45,6,8,664,8,9,23,235];


////bubble method
    var sort = function(arr){
      for(var i=0; i < arr.length; i++){
        for(var x=0; x<arr.length; x++){
          if(arr[i]<arr[x]){
            var temp = arr[i];
            arr[i] = arr[x];
            arr[x] = temp;
          }
        }

      }console.log(arr);
    };

    sort(myArray);
