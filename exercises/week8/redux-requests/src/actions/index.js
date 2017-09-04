import axios from "axios";
export function loadColor() {
    return (dispatch) => {
        return axios
            .get("http://www.colr.org/json/color/random")
            .then((response) => {
                console.log(response.data)
                dispatch(changeColor("#" + response.data.colors[0].hex));
                dispatch(changeColorName(response.data.colors[0].tags[0]));

            })

    }
}

export function changeColor(color) {

    return {
       
        type: "CHANGE_COLOR",
        color: color
    }
}

export function changeColorName(name) {

    return {
    
        type: "COLOR_NAME",
        name: name
    }
}