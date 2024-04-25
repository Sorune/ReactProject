import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";


const prefix = `${API_SERVER_HOST}/api/comment`

export const getComList = async({pathName})=>{
    console.log(pathName)
    const res = await axios.get(`${prefix}/list/${pathName}`)
    return res.data
}

export const insertComment = async (writer,content,newsNo)=>{
    const res = await axios.post(`${prefix}/`,
        {
            writer: writer,
            content: content,
            newsNo: newsNo,
        }
    )
    return res.data
}

export const removeComment = async (comNo)=>{
    const res = await axios.delete(`${prefix}/${comNo}`)
    return res.data
}

export const modifyComment = async ({comNo, content,writer,newsNo,recomNo})=>{
    const res = await axios.put(`${prefix}/${comNo}`,{
        comNo:comNo,
        content:content,
        writer:writer,
        newsNo:newsNo,
        recomNo:recomNo,
    })
    return res.data
}