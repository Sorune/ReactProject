import ContentHeader from "../../components/common/ContentHeader";
import {Card, CardBody, CardFooter} from "@material-tailwind/react";
import React, {useRef, useState} from "react";
import ContentInputBody from "../../components/common/ContentInputBody";
import {useRecoilValue} from "recoil";
import useCustomMove from "../../hooks/useCustomMove";
import {pageState} from "../../atoms/pageState";


const WritePage =()=>{
    const quillEditorRef = useRef()
    const [page] = useRecoilValue(pageState)
    const {moveToList} = useCustomMove();
    const handleSave = () => {
        if (quillEditorRef.current) {
            const quillInstance = quillEditorRef.current.getEditor();
            const content = quillInstance.getContents();
            console.log(content); // 에디터의 전체 텍스트 내용 로그 출력
            console.log(JSON.stringify(content.ops))
            // 여기에 axios를 사용하여 서버와 통신하는 로직을 추가할 수 있습니다.
        }
    };
    return (
        <section className="bg-white w-full h-full p-2 py-2">
            <ContentHeader page={page} pathName={'/news/list'} moveTo={moveToList}/>
            <Card className="flex flex-auto p-1">
                <CardBody>
                    <ContentInputBody
                        ref={quillEditorRef}
                    />
                </CardBody>
            </Card>
        </section>
    )
}
export default WritePage;
