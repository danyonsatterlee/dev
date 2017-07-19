let defaultState = {
    color: "red"
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "CHANGE_COLOR") {
  
let newColor=document.getElementsByClassName("wrapper").style=blue;
        return {
            ...state,
            color: newColor
        

        }
  
    } else {
        return {
            ...state
        }
    }

}

export default mainReducer;