import axios from "axios";


const chatApi = ()=>{

    const getChatRooms = async()=>{
        const res = await axios.get("http://localhost:8080/api/chat/rooms");
        return res.data;
    }

    return {getChatRooms};
}

export default chatApi;
