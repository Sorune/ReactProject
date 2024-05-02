import axios from "axios";
import {API_SERVER_HOST} from "../api/filesApi";
import {getCookie} from "./cookieUtill";


const jwtAxios = axios.create()

const refreshJWT = async (accessToken, refreshToken) =>{
    const host = API_SERVER_HOST
    const header = {headers:{"Authorization":`Bearer ${accessToken}`}}

    const res = await axios.get(`${host}/api/member/refresh?refreshToken=${refreshToken}`,header)

    return res.data
}

const beforeReq = (config) =>{
    const tokenInfo = getCookie("token")

    if(!tokenInfo){
        return Promise.reject({
            response:{
                data:
                    {error:"REQUIRE_LOGIN"}
            }
        })
    }
    const {accessToken} = tokenInfo
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
}