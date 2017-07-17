 let defaultState={
 uglyInfo: []
}


const mainReducer = (state =defaultState,action) => {
    if(action.type==="SUBMIT_UGLY"){
        ////put function stuff here
        console.log(state.uglyInfo);
        console.log(action.uglyInfo);
  
        return{
            ...state,
            uglyInfo: [...state.uglyInfo, action.uglyInfo]
    

        }
    } else{
        return{
            ...state
        }
    }

}

export default mainReducer;