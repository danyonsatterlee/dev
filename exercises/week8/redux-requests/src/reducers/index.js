let defaultState = {
   color: "red"
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "CHANGE_COLOR") {
  
// let newColor=document.getElementsByClassName("color-me").style.backgroundColor="blue";
        return {
            ...state,
            color: "blue"
        

        }
  
    } else {
        return {
            ...state
        }
    }

}

export default mainReducer;