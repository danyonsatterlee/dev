 let defaultState={
  names: [],
  result: ""
}


const mainReducer = (state =defaultState,action) => {
    if(action.type==="PICK_NAME"){
       

        ////put function stuff here
      let result=action.names[Math.floor(Math.random()*action.names.length)];
      let something = () => {
          console.log("can can");
      }
      
        return{
            ...state,
            result:result,
            something:something()

        

            //return result: of some kind
            // name1: action.names.name1,
            // name2: action.names.name2,
            // name3 :action.names.name3


        }
    } else{
        return{
            ...state
        }
    }

}

export default mainReducer;