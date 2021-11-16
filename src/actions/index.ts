import axios from "axios";
export const getSerectWord=()=>{
    return axios.get('http://localhost:3030')
    .then(response=>response.data);
}