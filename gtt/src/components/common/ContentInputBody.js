import {Button, Card,  Input} from "@material-tailwind/react";
import React, {useEffect, useRef, useState} from "react";
import QuilEditor from "./quill/QuilEditor";
import {DropDownInput} from "./DropDownInput";
import {Delta} from "quill/core";
import {memo} from "react";
import useCustomMove from "../../hooks/useCustomMove";
import {useRecoilState, useRecoilValue} from "recoil";
import {pageState} from "../../atoms/pageState";
import {useLocation, useNavigate} from "react-router-dom";
import {userState} from "../../atoms/userState";
import {deleteNews} from "../../api/newsApi";
import {removeBoard} from "../../api/boardApi";
import {removeFreeBoard} from "../../api/freeBoardApi";

const ContentInputBody = memo(({serverData,insert,modify,pathName,remove})=>{
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
    const [num,setNum] = useState(0);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [content,setContent] = useState("");
    const [stringContent,setStringContent] = useState({})
    useEffect(() => {
        if(serverData!==undefined&&serverData.content!==""){
            setContent(serverData.content);
            setTitle(serverData.title);
            setWriter(serverData.writer);
            if (pathName==="news"){
                setNum(serverData.newsNo)
            } else if (pathName === "free"){
                setNum(serverData.fno)
            } else if (pathName ==="board"){
                setNum(serverData.bno)
            }
            const QuillInstance = quillEditorRef.current.getEditor();
            QuillInstance.setContents(serverData.content!==""?JSON.parse(serverData.content,new Delta()):new Delta());
        }
    }, [serverData,userInfo]);
    const handleSave = () => {
        if(buttonRef.current){
            const buttonInstance = buttonRef.current
            setSelectedTeam(buttonInstance.innerText)
        }
        insert(title,stringContent,selectedTeam,writer).then(message => {
            alert(message.newsNo + "번 등록 완료")
            moveToList({pathName: `/${pathName}/list`,pageState:{ page:page.page, size : page.size}})
        })
    };
    const handleModify=()=>{
        if(buttonRef.current){
            const buttonInstance = buttonRef.current
            setSelectedTeam(buttonInstance.innerText)
        }
        modify(title,stringContent,selectedTeam,writer,num).then(message => {
            alert(message.result)
            navigate(-1)
        })
    }
    const handleRemove = () => {
        // 삭제할 게시물 번호를 확인
        console.log("삭제할 게시물의 번호:", num);

        // 삭제를 요청받은 경로를 받음
        console.log("삭제를 요청한 게시판 경로 : " + pathName);

        switch(pathName) {
            case "news":
                deleteToNews();
                break;
            case "board":
                deleteToBoard();
                break;
            case "free":
                deleteToFreeBoard();
                break;
            default:
                console.error("잘못된 경로입니다.");
        }
    }

    const deleteToNews = () => {
        // 삭제 API 호출
        deleteNews(num).then(response => {
            // 삭제 후 리스트 페이지로 이동하거나 다른 작업 수행
            moveToList({ pathName: `/${pathName}/list`, pageState: { page: page.page, size: page.size }});
        }).catch(error => {
            // 오류 처리
            console.error("삭제 API 호출 실패 :", error);
        });
    }

    const deleteToBoard = () => {
        // 게시판 삭제 API 호출
        removeBoard(num).then(response => {
            moveToList({ pathName: `/${pathName}/list`, pageState: { page: page.page, size: page.size }});
        }).catch(error => {
            console.error("삭제 API 호출 실패 :", error);
        });
    }

    const deleteToFreeBoard = () => {
        // 자유게시판 삭제 API 호출
        removeFreeBoard(num).then(response => {
            moveToList({ pathName: `/${pathName}/list`, pageState: { page: page.page, size: page.size }});
        }).catch(error => {
            console.error("삭제 API 호출 실패 :", error);
        });
    }


    const handleDropDownChange = (e) => {
        if(buttonRef.current){
            const buttonInstance = buttonRef.current
            setSelectedTeam(buttonInstance.innerText)
        }
        setTitle(e.target.value)
    };
    const handleQuillChange = (e)=>{
        const QuillInstance = quillEditorRef.current.getEditor();
        const val = QuillInstance.getContents();
        setContent(val)
        setStringContent(JSON.stringify(val))
    }
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
                }{
                    path==="write"?<></>:
                    <Button onClick={handleRemove} color={"red"}>Remove</Button>
                }
                </div>
            </form>
        </Card>
    )
})

export default ContentInputBody;
