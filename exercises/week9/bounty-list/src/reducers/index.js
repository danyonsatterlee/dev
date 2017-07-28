let defaultState = {
    hits:[
          {
            "name": "Edward Cullen",
            "location": "tree house",
            "price": "60",
            "wanted": "false"
        }
    ]
   
}


const mainReducer = (state = defaultState, action) => {
    if (action.type === "SET_DATA") {
        
            return {
                ...state,
               hits: action.data
            }
    }
    else{
        return{
            ...state
        }
    }
}

   export default mainReducer;