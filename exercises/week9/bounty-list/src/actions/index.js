import axios from "axios";

export function setData(words){
    return{
    type: "SET_DATA",
    words
    }

}