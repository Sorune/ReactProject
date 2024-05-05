import axios from "axios";

//export const API_SERVER_HOST = 'http://sorune.asuscomm.com:39173'
//export const API_SERVER_HOST = 'http://localhost:8001';
export const API_SERVER_HOST = 'http://localhost:8080';
//export const API_SERVER_HOST = 'http://mbc-webcloud.iptime.org:8080'

export const SERVER_HOST = 'http://localhost:3000';
//export const SERVER_HOST = 'http://mbc-webcloud.iptime.org:3000'

const prefix = `${API_SERVER_HOST}/api/files`;
export const insertFiles = async(file)=>{
    const formData = new FormData();
    console.log(file);
    formData.append('file',file);
    const res = await axios.post(`${prefix}/`,formData)
    console.log(res, res.data)
    return res.data
}
