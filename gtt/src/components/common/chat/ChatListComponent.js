import {useEffect, useState} from "react";
import axios from "axios";


const ChatListComponent = ()=>{
    const [rooms, setRooms] = useState([]);
    const getChatRooms = async()=>{
        const res = await axios.get("http://localhost:8080/api/chat/rooms");
        return res.data;
    }
    useEffect(() => {
        getChatRooms().then(res=>{
            console.log(res);
            setRooms(res.rooms)
        });
    }, []);
    console.log(rooms);
    return(
        <table>
            <thead>
                <th>ChatRoom</th>
                <th>Manager</th>
            </thead>
            <tbody>
            {rooms!==undefined?rooms.map((room)=> {
                console.log(room);
                return (
                    <tr key={room.roomId}>
                        <td>
                            <div>{room.roomId}</div>
                        </td>
                        <td>
                            <div>{room.roomName}</div>
                        </td>
                    </tr>
                )
            }) : <></>}
            </tbody>
        </table>
    )
}
export default ChatListComponent
