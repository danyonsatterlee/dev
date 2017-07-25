let defaultState = {
    words: ""
   
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