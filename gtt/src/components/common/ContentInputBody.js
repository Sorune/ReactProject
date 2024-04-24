import {Button, Card,  Input} from "@material-tailwind/react";
import React, {useRef, useState} from "react";
import QuilEditor from "./quill/QuilEditor";
import {DropDownInput} from "./DropDownInput";
import {Delta} from "quill/core";

const ContentInputBody =()=>{
    const quillEditorRef = useRef()
    const buttonRef = useRef()
    const [title,setTitle] = useState("");
    const [selectedTeam, setSelectedTeam] = useState('');

    const [content,setContent] = useState(new Delta());
    const handleSave = () => {
        if (quillEditorRef.current) {
            const quillInstance = quillEditorRef.current.getEditor();
            const value = quillInstance.getContents();
            const buttonInstance = buttonRef.current;
            console.log(value); // 에디터의 전체 텍스트 내용 로그 출력
            console.log(JSON.stringify(value.ops))
            console.log(JSON.stringify(buttonInstance));
            // 여기에 axios를 사용하여 서버와 통신하는 로직을 추가할 수 있습니다.
        }
    };
    const handleDropDownChange = (e) => {
        setTitle(e.target.value);
        setSelectedTeam(buttonRef.current.innerText)
    };

    return (

        <Card className="p-2 m-2 min-h-[10rem]">
            <form>
                <div className="grid grid-cols-auto gap-4 grid-rows-auto flex items-stretch flex items-center flex flex-box mt-2 mb-2 ml-2 ">
                    <div className="col-start-1 col-end-2 p-1">
                        <DropDownInput ref={buttonRef} onChange={handleDropDownChange} title={title}/>
                    </div>
                </div>
                <hr/>
                <div className="p-3">
                    <QuilEditor ref={quillEditorRef} value={content}/>
                    <Button onClick={handleSave}>save</Button>
                </div>
            </form>
        </Card>
    )
}

export default ContentInputBody;
