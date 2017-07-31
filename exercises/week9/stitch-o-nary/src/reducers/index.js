let defaultState = {
    stitch: [
        {
            name: "",
            category: "",
            notes: "",
            pattern: [
                {
                    row1: "",
                    row2: "",
                    row3: "",
                    row4: "",
                    row5: "",
                    row6: "",
                    row7: "",
                    row8: "",
                    row9: "",
                    row10: "",
                    row11: "",
                    row12: "",
                    row13: "",
                    row14: "",
                    row15: "",
                    row16: ""
                }
            ]
            

        }
    ]

}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "SET_DATA") {

        return {
            ...state,
            stitch: action.data
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;