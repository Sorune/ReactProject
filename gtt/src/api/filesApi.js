import axios from "axios";

<<<<<<< HEAD
//xport const API_SERVER_HOST = 'http://sorune.asuscomm.com:39173'
=======
//export const API_SERVER_HOST = 'http://sorune.asuscomm.com:39173'
>>>>>>> 6900ec90691837e003a8caad0ca5ca7615fe8549
export const API_SERVER_HOST = 'http://localhost:8080'
const prefix = `${API_SERVER_HOST}/api/files`

export const insertFiles = async(file)=>{
    const formData = new FormData();
    formData.append('file',file);
    const res = await axios.post(`${prefix}/`,formData)
    console.log(res, res.data)
    return res.data
}
