import axios from "axios";
//import {API_SERVER_HOST} from "./filesApi";
export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/notice`

export const  getOne =async (notiNo) => {

    const res =await axios.get(`${prefix}/${notiNo}`)

    return res.data
}

export const getList =async (pageParam) => {

    const {page, size} = pageParam

    const res = await axios.get(`${prefix}/list`, {params:{page:page, size:size}})

    return res.data
}

export const postAdd = async (noticeObj) => {

    const res = await axios.post(`${prefix}/`,noticeObj)
    return res.data
}

export const deleteOne = async (notice) => {

    const res = await axios.delete(`${prefix}/${notice.notiNo}`, notice)
    return res.data
}

export const putOne = async (notice) =>{

    const res = await axios.put(`${prefix}/${notice.notiNo}`, notice)
    return res.data
}