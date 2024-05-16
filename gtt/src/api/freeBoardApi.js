import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";

const prefix = `${API_SERVER_HOST}/api/free`

export const getFreeList = async(pageParam)=>{
    const {page,size} = pageParam
    const res = await axios.get(`${prefix}/list`,{params:{page:page,size:size}})
    return res.data
}
export const getMyFreeBoard = async (pageParam, userId) => {
    const { page, size } = pageParam

    const res = await axios.get(`${prefix}/myPost/list`, {
        params: {page: page, size: size, userId: userId}
    })
    return res.data
}
export const hotFreePost = async (pageParam) => {
    const {page, size} = pageParam

    const res = await axios.get(`${prefix}/hotPost`,{params:{page:page,size:size}})
    return res.data
}

export const getOne = async(fno)=>{
    console.log(fno)
    const res = await axios.get(`${prefix}/${fno}`)
    return res.data
}

export const insertFreeBoard = async (title,content,writer)=>{
    const res = await axios.post(`${prefix}/`,{
        title:title,
        content:content,
        writer:writer
    })
    return res.data
}

export const modifyFreeBoard = async (title,content,selectedTeam,writer,fno)=>{
    const res = await axios.put(`${prefix}/${fno}`,{
        title:title,
        content:content,
        writer:writer
    })
    return res.data
}

export const removeFreeBoard = async (fno) => {
    const res = await axios.delete(`${prefix}/${fno}`);
    return res.data;
}