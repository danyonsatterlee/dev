 let defaultState={
  names: [],
  result: ""
}


const mainReducer = (state =defaultState,action) => {
    if(action.type==="PICK_NAME"){
        ////put function stuff here
    let result=action.names[Math.floor(Math.random()*action.names.length)];
        return{
            ...state,
            result:result,

        }
    } else{
        return{
            ...state
        }
    }

}

export default mainReducer;