let defaultState = {
    beer: [
        {
            name:"",
            likes:1
        }
    ]
}



const mainReducer =(state = defaultState, action)=>{
    if(action.type==="SET_DATA"){
        return{
            ...state,
            beer:action.data
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;