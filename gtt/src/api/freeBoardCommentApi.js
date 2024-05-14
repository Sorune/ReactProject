import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";


const prefix = `${API_SERVER_HOST}/api/free/comment`

export const getComList = async({pathName})=>{
    console.log(pathName)
    const res = await axios.get(`${prefix}/list/${pathName}`)
    return res.data
}

export const insertComment = async (writer, content, fno) => {
    let url = `${prefix}/list/${fno}/`;
    let requestBody = { writer: writer, content: content ,fno:fno};
    const res = await axios.post(url, requestBody)
    return res.data
}




export const removeComment = async (comNo)=>{
    const res = await axios.delete(`${prefix}/${comNo}`)
    return res.data
}

export const modifyComment = async ({comNo, content,writer,fno,recomNo})=>{
    const res = await axios.put(`${prefix}/${comNo}`,{
        comNo:comNo,
        content:content,
        writer:writer,
        fno:fno,
        recomNo:recomNo,
    })
    return res.data
}