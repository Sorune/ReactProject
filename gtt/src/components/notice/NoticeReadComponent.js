import {useEffect, useState} from "react";
import {getOne} from "../../api/noticeApi";
import useCustomMove from "../../hooks/useCustomMove";
import {Button} from "@material-tailwind/react";

const initStaste = {
    notiNo:0,
    title:'',
    writer:'',
    content:'',
    regDate:'null',
    modDate:'null'
}

const NoticeReadComponent = ({notiNo, page}) => {

    const [notice, setNotice] = useState(initStaste)
    // 이동 관련 기능은 모두 useCustomMove() 사용
    const {moveToList, moveToModify} =useCustomMove()

    useEffect(()=>{
        getOne(notiNo).then(data => {
            console.log(data)
            setNotice(data)
        })
    }, [notiNo])

    return(
        <div className="border-2 boder-sky-200 mt-10 m-2 p-4">
            {makeDiv('NotiNo', notice.notiNo)}
            {makeDiv('title', notice.title)}
            {makeDiv('content', notice.content)}
            {makeDiv('writer', notice.writer)}
            {makeDiv('regDate', notice.regDate)}
            {makeDiv('modDate', notice.modDate)}

            <div className="flex justify-end p-4">
                <Button onClick={()=> moveToList({
                        pathName:'notice/list',
                        pageParam:{page: `${page.page}`, size: `${page.size}`}
                    })}>List</Button>

                <Button onClick={() => moveToModify({
                    pathName:'modify', num:notiNo
                })}>Modify</Button>
            </div>


        </div>
    )
}

const makeDiv = (title, value) =>
    <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">{title}</div>
            <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
                {value} {/* 위 makeDiv 안의 값*/}
            </div>
        </div>
    </div>

export default NoticeReadComponent;