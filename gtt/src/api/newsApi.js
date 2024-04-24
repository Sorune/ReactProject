import axios from "axios";

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/news`

export const getList = async(pageParam)=>{
    const {page,size} = pageParam
    const res = await axios.get(`${prefix}/list`,{params:{page:page,size:size}})
    return res.data
}

export const getOne = async(newsNo)=>{
    console.log(newsNo)
    const res = await axios.get(`${prefix}/${newsNo}`)
    return res.data
}

export const insertNews = async ({pageParam,pathName,newsObj})=>{
    console.log(pathName,newsObj)
    // const {newsNo} =pageParam
    // const res = await axios.get(`${prefix}/${newsNo}`)
    // return res.data
}
