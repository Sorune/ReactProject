import axios from "axios";

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

