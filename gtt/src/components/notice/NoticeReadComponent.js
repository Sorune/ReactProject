import {useEffect, useState} from "react";
import {getOne} from "../../api/noticeApi";
import useCustomMove from "../../hooks/useCustomMove";
import {Button} from "@material-tailwind/react";
import {createSearchParams, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";



const initStaste = {
    notiNo:0,
    title:'',
    writer:'',
    content:'',
    regDate:'null',
    modDate:'null'
}

const NoticeReadComponent = ({notiNo, page, size}) => {

    const [notice, setNotice] = useState(initStaste)
    //const queryStr = createSearchParams({page, size}).toString()
   // console.log(queryStr)
    console.log(page, size)
    // 이동 관련 기능은 모두 useCustomMove() 사용
    const {moveToList, moveToModify} =useCustomMove()

/*
    const navigate = useNavigate()
    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10
    const queryStr = createSearchParams({page, size}).toString()
*/

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
                        pathName:'/notice/list',
                        pageParam:{size: {size}, page:{page}}
                    })}>List</Button>

                <Button onClick={() => moveToModify({
                    pathName:'/notice/modify',
                    num:notiNo
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