import axios from "axios"
import {API_SERVER_HOST} from "./filesApi";

const prefix = `${API_SERVER_HOST}/api/playercomment`

export const getOnePComment = async (playerComNo) => {
    const res = await axios.get(`${prefix}/${playerComNo}`)

    return res.data
}

export const getPCommentList = async (pageParam) => {
    const {page, size} = pageParam
    const res = await axios.get(`${prefix}/list`, {params:{page:page, size:size}})

    return res.data
}

export const postPCommentAdd = async (playerComment) => {
    const header =     {headers: {'Content-Type': 'application/json'}}
    const res = await axios.post(`${prefix}/`, playerComment, header)

    return res.data
}

export const putOnePComment = async (playerComNo, playerComment) => {
    const header =     {headers: {'Content-Type': 'application/json'}}
    const res = await axios.put(`${prefix}/${playerComNo}`, playerComment, header)

    return res.data
}

export const deleteOnePComment = async (playerComNo) =>{
    const res = await axios.delete(`${prefix}/${playerComNo}`)

    return res.data
}