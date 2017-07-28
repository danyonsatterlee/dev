let defaultState = {
   hit:{
       name:"",
       location:"texas",
       price:"40",
       wanted:true
   },
   hits:[]
   
}


const mainReducer = (state = defaultState, action) => {
    if (action.type === "SET_DATA") {
        
            return {
                ...state,
                words: action.words
            }
    }
    else{
        return{
            ...state
        }
    }
}

   export default mainReducer;