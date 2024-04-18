import axios from "axios";

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/comment`

export const getComList = async(newsNo)=>{
    const res = await axios.get(`${prefix}/list/${newsNo}`)
    return res.data
}