import {
    Button,
    Card,
    CardFooter,
    IconButton,
    Popover,
    PopoverContent,
    PopoverHandler,
    Textarea
} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {memo, useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {chatListState,chatState} from "../../../atoms/chatData";
import useWebSocket from "../../../hooks/useWebSocket";
export const dismissType = {
    outsidePress: false,
};
const userId = "test"

const ChatComponent = memo(()=>{
    const [chatRoomId,setChatRoomId] = useState("");
    const chatRef = useRef(null);
    const [client, setClient] = useState(null);
    const [chat, setChat] = useRecoilState(chatState);
    const [chatList, setChatList] = useRecoilState(chatListState);
    const {connect, disConnect, sendChat} = useWebSocket()
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(()=>{
        if(client!==undefined) {
            const data = connect()
            data.then((resData)=>{
                setClient(resData.client);
                setChatRoomId(resData.chatRoomId);
                console.log(resData.chatRoomId,resData.client)
            })
        }

        return()=>disConnect(client);
    },[chatList])

    const onChangeChat = (e) => {
        setChat(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(chat,chatRoomId,client)
        client.publish({
            destination: "/pub/api/chat/message/",
            contentsType: "application/json",
            body: JSON.stringify({
                messageType:"TALK",
                message:chat,
                chatRoomId:chatRoomId,
                senderId:userId,
            })
        });
        setChat("")
    };
    const handleReset = () =>{
        console.log("reset target : "+ chatRef.current.children[0])
        chatRef.current.children[0].value = ""
    }

    return(
        <div>
            <Popover active={isOpen} dismiss={dismissType} onOutsideClick={handleClose}>
                <PopoverHandler>
                    <IconButton variant="outlined" onClick={handleClick}><FontAwesomeIcon icon={faComments} className={"text-lg"} /></IconButton>
                </PopoverHandler>
                <PopoverContent>
                    <Card className="z-20">

                        <CardFooter>
                            <Textarea ref={chatRef} variant="static" placeholder="Your Comment" rows={3} onChange={onChangeChat} value={chat}/>
                            <div className="flex gap-2">
                                <Button size="sm" color="red" variant="text" className="rounded-md"
                                        onClick={handleReset}>
                                    Cancel
                                </Button>
                                <Button size="sm" className="rounded-md" onClick={handleSubmit}>
                                    Post Comment
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </PopoverContent>
            </Popover>
        </div>
    )
})
export default ChatComponent
