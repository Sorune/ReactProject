import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";


const prefix = `${API_SERVER_HOST}/api/comment`

export const getComList = async({pathName})=>{
    console.log(pathName)
    const res = await axios.get(`${prefix}/list/${pathName}`)
    return res.data
}

export const insertComment = async (comObj)=>{
    console.log(comObj)
    const res = await axios.post(`${prefix}/`)
    return res.data
}

export const removeComment = async (comNo)=>{
    const res = await axios.delete(`${prefix}/${comNo}`)
    return res.data
}
