let defaultState = {
    color: "red",
    name: "I am a color"
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "CHANGE_COLOR") {
        if (action.color === "#") {
            return {
                ...state,
                color: "red"
            }

        } else {
            return {
                ...state,
                color: action.color

            }
        }

    } else if (action.type === "COLOR_NAME") {
        if (action.name !== undefined) {
            return {
                ...state,

                name: action.name.name
            }
        } else {
            return {
                ...state,
                name: "red"
            }
        
        }
    } else {
        return {
            ...state
        }
    }
}

    export default mainReducer;