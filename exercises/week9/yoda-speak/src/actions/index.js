import axios from "axios"

let config ={
    headers:{
 "X-Mashape-Key" : "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
     }
}

export function convertText(words){
    return (dispatch)=>{
        return axios.get(`https://yoda.p.mashape.com/yoda?sentence=${words}`, config).then((response)=>{
        dispatch(setData(response.data));
        }).catch((error) => {
            throw error;
        })

    }
}
export function setData(words){
    return{
    type: "SET_DATA",
    words
    }

}