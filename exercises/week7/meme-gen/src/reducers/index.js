let defaultState={
    toptext: "",
    bottomtext:"",
    url:""
}


const mainReducer = (state =defaultState,action) => {
    if(action.type==="MAKE_MEME"){
        console.log("somebody made a meme", action.meme);
        return{
            ...state,
            toptext: action.meme.toptext,
            bottomtext: action.meme.bottomtext,
            url :action.meme.url


        }
    } else{
        return{
            ...state
        }
    }

}

export default mainReducer;