import {
    Button,
    Card,
    CardFooter,
    IconButton,
    Popover,
    PopoverHandler,
    Textarea,
    Typography
} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import ChatCell from "./ChatCell";
import MyChatCell from "./MyChatCell";
import React, {useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {chatState} from "../../../atoms/chatData";


const ChatRoomComponent = ({moveTo}) => {
    const chatRef = useRef(null);
    const [chat, setChat] = useRecoilState(chatState);


    const onChangeChat = (e) => {
        setChat(e.target.value);
    };

    const handleSubmit = ()=>{

    }

    const handleReset = () =>{
        console.log("reset target : "+ chatRef.current.children[0])
        chatRef.current.children[0].value = ""
    }

    return (
        <div className="h-full">
            <div className={"grid grid-cols-6 outline-1 justify-center items-center"}>
                <IconButton variant="text" onClick={moveTo} className="col-start-1 col-end-2">
                    <FontAwesomeIcon icon={faArrowLeft} className={"text-lg"}/>
                </IconButton>
                <Typography type={"div"} variant={"h5"}
                            className={"text-black text-center col-start-2 col-end-5 overflow-auto"}>Room
                    Name</Typography>
            </div>
            <Card className="mt-2 z-20 h-[350px]">
                <div className="h-[250px] overflow-y-scroll scrollbar-hide">
                    <ChatCell message={"test"}/>
                    <MyChatCell message={"test"}/>
                    <MyChatCell message={"test"}/>
                    <MyChatCell message={"test"}/>
                    <MyChatCell message={"test"}/>
                    <MyChatCell message={"test"}/>
                    <MyChatCell message={"test"}/>
                </div>
                <div className="p-2">
                    <div className="grid w-full grid-cols-1 items-center rounded-[99px] border border-black p-2">
                        <Textarea
                            rows={1}
                            resize={false}
                            placeholder="Your Message"
                            className="min-w-0 min-h-full !border-0 focus:border-transparent scrollbar-hide"
                            containerProps={{
                                className: "grid h-full",
                            }}
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <div className="flex justify-end">
                            <IconButton variant="text" className="rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                    />
                                </svg>
                            </IconButton>
                            <IconButton variant="text" className="rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-5 w-5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                                </svg>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ChatRoomComponent
