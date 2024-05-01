import axios from "axios";

//export const API_SERVER_HOST = 'http://sorune.asuscomm.com:39173'
export const API_SERVER_HOST = 'http://localhost:8001';
const prefix = `${API_SERVER_HOST}/api/files`;

export const insertFiles = async(file)=>{
    const formData = new FormData();
    formData.append('file',file);
    const res = await axios.post(`${prefix}/`,formData)
    console.log(res, res.data)
    return res.data
}
