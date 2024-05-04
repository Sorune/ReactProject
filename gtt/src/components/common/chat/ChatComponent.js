import {
    Badge,
    Button,
    Card,
    CardFooter,
    Chip,
    IconButton,
    Popover,
    PopoverContent,
    PopoverHandler,
    Textarea,
    Typography
} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faComments} from "@fortawesome/free-solid-svg-icons";
import {memo, useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {chatListState,chatState} from "../../../atoms/chatData";
import useWebSocket from "../../../hooks/useWebSocket";
import ChatCell from "./ChatCell";
import MyChatCell from "./MyChatCell";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import ChatRoomComponent from "./ChatRoomComponent";
import ChatListComponent from "./ChatListComponent";

export const dismissType = {
    outsidePress: false,
};
const userId = "test"

const ChatComponent = memo(()=>{
    const [chatList, setChatList] = useRecoilState(chatListState);
    const [isOpen, setIsOpen] = useState(false);
    const [isList, setIsList] = useState(false);
    const [chatRoomId,setChatRoomId] = useState("");

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    const handleList = ()=>{
        setIsList(!isList);
    }

    return(
        <div className={"fixed bottom-10 right-10 z-30"}>
            <Popover active={isOpen} dismiss={dismissType} onOutsideClick={handleClose}>
                <PopoverHandler>
                    <IconButton variant="outlined" onClick={handleClick}><FontAwesomeIcon icon={faComments} className={"text-lg"} /></IconButton>
                </PopoverHandler>
                <PopoverContent>
                    <div className="w-[250px] h-[400px]">
                        {isList?
                            <ChatListComponent chatList={chatList} moveTo={handleList}/>:
                            <ChatRoomComponent moveTo={handleList} />}
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
})
export default ChatComponent
