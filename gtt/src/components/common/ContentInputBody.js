import {Button, Card,  Input} from "@material-tailwind/react";
import React, {useEffect, useRef, useState} from "react";
import QuilEditor from "./quill/QuilEditor";
import {DropDownInput} from "./DropDownInput";
import {Delta} from "quill/core";
import {memo} from "react";
import {insertNews, modifyNews} from "../../api/newsApi";
import useCustomMove from "../../hooks/useCustomMove";
import {useRecoilState, useRecoilValue} from "recoil";
import {pageState} from "../../atoms/pageState";
import {useLocation, useNavigate} from "react-router-dom";
import {userState} from "../../atoms/userState";

const ContentInputBody = memo(({serverData})=>{
    const [userInfo,setUserInfo] = useRecoilState(userState)
    const navigate = useNavigate();
    const path = useLocation().pathname.split("/")[2];
    const {moveToList,moveToRead} = useCustomMove()
    const page = useRecoilValue(pageState)
    const quillEditorRef = useRef()
    const buttonRef = useRef()
    const inputRef = useRef()
    const [title,setTitle] = useState("");
    const [writer, setWriter]=useState(userInfo[0]&&userInfo[0].nick!==undefined?userInfo[0].nick:"Anonymous");
    const [selectedTeam, setSelectedTeam] = useState('');
    const [content,setContent] = useState("");
    const [stringContent,setStringContent] = useState({})
    useEffect(() => {
        if(serverData!==undefined&&serverData.content!==""){
            console.log(serverData);
            setContent(serverData.content);
            setTitle(serverData.title);
            setWriter(serverData.writer);
            console.log(content,title,writer);
            const QuillInstance = quillEditorRef.current.getEditor();
            QuillInstance.setContents(serverData.content!==""?JSON.parse(serverData.content,new Delta()):new Delta());
        }
    }, [serverData,userInfo]);
    const handleSave = () => {
        if(buttonRef.current){
            const buttonInstance = buttonRef.current
            setSelectedTeam(buttonInstance.innerText)
            console.log(selectedTeam)
        }
        console.log(title,selectedTeam,content,stringContent)
        insertNews(title,stringContent,selectedTeam,writer).then(message => {
            alert(message.newsNo + "번 등록 완료")
            moveToList({pathName: '/news/list',pageState:{ page:page.page, size : page.size}})
        })
    };
    const handleModify=()=>{
        if(buttonRef.current){
            const buttonInstance = buttonRef.current
            setSelectedTeam(buttonInstance.innerText)
            console.log(selectedTeam)
        }
        console.log(title,selectedTeam,content,stringContent)
        modifyNews(title,stringContent,selectedTeam,"user",serverData.newsNo).then(message => {
            alert(message.result)
            navigate(-1)
        })
    }
    const handleDropDownChange = (e) => {
        if(buttonRef.current){
            const buttonInstance = buttonRef.current
            setSelectedTeam(buttonInstance.innerText)
            console.log(selectedTeam)
        }
        console.log(e.target.value)
        setTitle(e.target.value)
    };
    const handleQuillChange = (e)=>{
        const QuillInstance = quillEditorRef.current.getEditor();
        const val = QuillInstance.getContents();
        console.log(val)
        setContent(val)
        setStringContent(JSON.stringify(val))
    }
    console.log(userInfo)
    return (

        <Card className="p-2 m-2 min-h-[10rem]">
            <form>
                <div className="grid grid-cols-auto gap-4 grid-rows-auto flex items-stretch flex items-center flex flex-box mt-2 mb-2 ml-2 ">
                    <div className="col-start-1 col-end-3 p-1">
                        <DropDownInput placeholder="title" buttonRef={buttonRef} inputRef={inputRef} onChange={handleDropDownChange} title={title}/>
                    </div>
                    <div className="col-start-3 p-1">
                        <div className="w-full">
                            <Input label="Username" readOnly={true} value={writer} />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="p-3">
                    <QuilEditor ref={quillEditorRef} onChange={handleQuillChange} value={content}/>
                </div>
                <div className="p-3 justify-self-end flex justify-center">
                    {path==="write"?<Button onClick={handleSave}>Save</Button>:
                        <Button onClick={handleModify}>Modify</Button>
                }
                </div>
            </form>
        </Card>
    )
})

export default ContentInputBody;
