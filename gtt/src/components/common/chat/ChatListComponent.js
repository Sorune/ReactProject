import React, {useEffect, useState} from "react";
import axios from "axios";
import chatApi from "../../../api/chatApi";
import {
    Button,
    Card,
    IconButton,
    Input, ListItem,
    Popover,
    PopoverContent,
    PopoverHandler,
    Typography,
    List, ListItemPrefix, Avatar,
} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faPlus} from "@fortawesome/free-solid-svg-icons";


const ChatListComponent = ({moveTo})=>{
    const [rooms, setRooms] = useState([]);
    const [roomName, setRoomName] = useState("");
    const {getChatRooms} = chatApi()

    const onChange=(e)=>{
        setRoomName(e.target.value)
    }
    useEffect(() => {
        getChatRooms().then(res=>{
            console.log(res);
            setRooms(res.rooms)
        });
    }, []);
    console.log(rooms);
    return (
        <div>
            <Popover>
                <PopoverHandler>
                    <div className={"grid grid-cols-6 outline-1 justify-center items-center"}>
                        <Typography type={"div"} variant={"h5"}
                                    className={"text-black text-center col-start-2 col-end-5 overflow-auto"}>Room
                            List</Typography>
                        <IconButton variant="text" className="col-start-6 col-end-6">
                            <FontAwesomeIcon icon={faPlus} className={"text-lg"}/>
                        </IconButton>
                    </div>
                </PopoverHandler>
                <PopoverContent>
                    <Card>
                        <div className="relative flex w-full max-w-[24rem]">
                            <Input
                                type="text"
                                label="Room Name"
                                value={roomName}
                                onChange={onChange}
                                className="pr-20"
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                            <Button
                                size="sm"
                                color={roomName ? "gray" : "blue-gray"}
                                disabled={!roomName}
                                className="!absolute right-1 top-1 rounded"
                            >
                                Create
                            </Button>
                        </div>
                    </Card>
                </PopoverContent>
            </Popover>
            <List>
                <ListItem onClick={moveTo}>
                    <ListItemPrefix>
                        <Avatar variant="circular" className="w-6 h-6" src="/img/ChatGPT.png" />
                    </ListItemPrefix>
                    <Typography variant="h6">ChatGPT</Typography>
                </ListItem>
                <ListItem className="justify-between" onClick={moveTo}>
                    <Typography variant="h6">Room6</Typography>
                    <Typography variant={"small"} className={"justify-end"}>manager</Typography>
                </ListItem>
            </List>
        </div>

    )
}
export default ChatListComponent
