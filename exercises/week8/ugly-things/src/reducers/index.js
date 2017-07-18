let defaultState = {
    uglyInfo: []
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "SUBMIT_UGLY") {
        ////put function stuff here
        console.log(state.uglyInfo);
        console.log(action.uglyInfo);

        return {
            ...state,
            uglyInfo: [
                ...state.uglyInfo,
                action.uglyInfo
            ]

        }
    } else if (action.type === "DELETE_UGLY") {
        let deleteUg = [...state.uglyInfo]
        deleteUg.splice(action.index, 1)
        return {
            ...state,
            uglyInfo: deleteUg 
            }
        }
 else if (action.type === "EDIT_ITEM") {
        let editItem = [...state.uglyInfo]
        editItem[action.index]=action.post
        return{
            ...state,
            uglyInfo:editItem
        }

    } else {
        return {
            ...state
        }
    }

}

export default mainReducer;