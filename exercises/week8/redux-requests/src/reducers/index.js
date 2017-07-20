let defaultState = {
    color: "red"
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
        } else {
            return {
                ...state
            }
        }

    }

    export default mainReducer;