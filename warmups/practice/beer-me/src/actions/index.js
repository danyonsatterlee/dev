import axios from "axios";

const myApi = axios.create({
  baseURL: 'http://beer.fluentcloud.com/v1/beer/',
  timeout: 10000,
  withCredentials: true,
  transformRequest: [(data) => JSON.stringify(data.data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
export function loadData(){
    return(dispatch)=>{ 
        return axios.get("http://beer.fluentcloud.com/v1/beer/").then((response)=>{
            dispatch(setData(response.data))
            console.log(response.data)
        }).catch((error)=>{
            throw error;
        });
    }
}

export function addData(data){
    return(dispatch)=>{
        return axios.post("http://beer.fluentcloud.com/v1/beer/",data, myApi).then((response)=>{
           console.log(response.data);
            dispatch(loadData());
          
        }).catch((error)=>{
            throw error;
        });
    }
}


export function upVote(id){
    return(dispatch)=>{
        return axios.put(`http://beer.fluentcloud.com/v1/beer/${id}`).then((response)=>{
           response.data[0].likes+1
        dispatch(loadData());
        }).catch((error)=>{
            throw error;
        });
    }
}

export function downVote(id){
        return(dispatch)=>{
        return axios.put(`http://beer.fluentcloud.com/v1/beer/${id}`).then((response)=>{
           response.data[0].likes-1
        dispatch(loadData());
        }).catch((error)=>{
            throw error;
        });
    }
}


    export function setData(data){
    return{
        type:"SET_DATA",
        data
    }
}