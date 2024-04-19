import axios from "axios";

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/files`

export const insertFiles = async(file)=>{
    const {page,size,newsNo} =pageParam
    const res = await axios.get(`${prefix}/${newsNo}`,{params:{page:page,size:size}})
    return res.data
}