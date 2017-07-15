let defaultState={
    name1: "",
    name2:"",
   name3:""
}


const mainReducer = (state =defaultState,action) => {
    if(action.type==="PICK_NAME"){
        console.log("somebody made a meme", action.names);
        return{
            ...state,
            name1: action.names.name1,
            name2: action.names.name2,
            name3 :action.names.name3


        }
    } else{
        return{
            ...state
        }
    }

}

export default mainReducer;