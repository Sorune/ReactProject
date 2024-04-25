import {Button, Card,  Input} from "@material-tailwind/react";
import React, {useRef, useState} from "react";
import QuilEditor from "./quill/QuilEditor";
import {DropDownInput} from "./DropDownInput";
import {Delta} from "quill/core";
import DropFiles from "./DropFiles";

const ContentInputBody =()=>{
    const quillEditorRef = useRef()
    const buttonRef = useRef()
    const inputRef = useRef()
    const [title,setTitle] = useState("");
    const [writer, setWriter]=useState("");
    const [selectedTeam, setSelectedTeam] = useState('');
    const [content,setContent] = useState(new Delta());

    const handleSave = () => {
        if (quillEditorRef.current) {
            const quillInstance = quillEditorRef.current.getEditor();
            const value = quillInstance.getContents();
            console.log(value); // 에디터의 전체 텍스트 내용 로그 출력
            setContent(value)
            console.log(JSON.stringify(value.ops))
            // 여기에 axios를 사용하여 서버와 통신하는 로직을 추가할 수 있습니다.
        }
        if(buttonRef.current){
            const buttonInstance = buttonRef.current
            console.log(buttonInstance.innerText)
            Array.from(buttonInstance.children).map((child,i)=>{
                console.log(child)
            })
        }
        if (inputRef.current){
            const inputInstance = inputRef.current
            Array.from(inputInstance.children).map((child,i)=> {
                if (i === 0) {
                    setTitle(child.value)
                    console.log(title)
                }
            })
        }
    };
    const handleDropDownChange = (e) => {
        setTitle(e.target.value);
    };

    return (

        <Card className="p-2 m-2 min-h-[10rem]">
            <form>
                <div className="grid grid-cols-auto gap-4 grid-rows-auto flex items-stretch flex items-center flex flex-box mt-2 mb-2 ml-2 ">
                    <div className="col-start-1 col-end-3 p-1">
                        <DropDownInput buttonRef={buttonRef} inputRef={inputRef} onChange={handleDropDownChange} title={title}/>
                    </div>
                    <div className="col-start-3 p-1">
                        <div className="w-full">
                            <Input label="Username" readOnly={true}  />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="p-3">
                    <QuilEditor ref={quillEditorRef} value={content}/>
                </div>
                <div className="p-3 justify-self-end flex justify-center">
                    <Button onClick={handleSave}>save</Button>
                </div>
            </form>
        </Card>
    )
}

export default ContentInputBody;
