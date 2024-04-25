import axios from "axios"

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/player`

export const getOnePlayer = async (pno) => {
    const res = await axios.get(`${prefix}/${pno}`)

    return res.data
}

export const getPlayerList = async (pageParam) => {
    const {page, size} = pageParam
    const res = await axios.get(`${prefix}/list`, {params:{page:page, size:size}})

    return res.data
}