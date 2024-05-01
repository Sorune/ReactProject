import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea, Typography} from "@material-tailwind/react";
import {deleteOne, getOne, putOne} from "../../api/noticeApi";

import useCustomMove from "../../hooks/useCustomMove";
import {DialogResult} from "../common/DialogResult";
import {DropDownInput} from "../common/DropDownInput";
import QuilEditor from "../common/quill/QuilEditor";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import ContentHeader from "../common/ContentHeader";

const intiState = {
    notiNo: 0,
    title:'',
    content:'',
    writer:''
}

const initState = {
    dtoList:[],
    pageNumList:[],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}

const NoticeModifyComponent = ({notiNo, page}) => {
    //console.log(notiNo + "번 게시물 수정")
    const [notice, setNotice] = useState({...intiState})
    const [result, setResult] = useState(null)
    const {moveToList, moveToRead} = useCustomMove()
    const [regDate, setRegDate] = useState("")
    const [serverData, setServerData] = useState(initState)

    useEffect(() => {

        getOne(notiNo).then(data => setNotice(data))

    }, [notiNo])

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const handleClickModify = () => { // 수정버튼 클릭시
        const modifiedNotice = { ...notice };
        delete modifiedNotice.regDate;
        delete modifiedNotice.modDate;
        delete modifiedNotice.writer;

        putOne(modifiedNotice).then(data => {
            console.log("modify result : " + data)
            setResult("SUCCESS")
        }).catch(error => {
            console.log(error)
            setResult("FAIL")
        })
    }
    const handleClickDelete = () => {
        console.log(notiNo + "번 게시물 삭제 ")
        deleteOne(notiNo).then(data => {
            console.log("delete result : " + data)
            setResult("DELETE SUCCESS")

        }).catch(error => {
            console.log(error)
            setResult("FAIL")
        })
    }
// 모달을 닫으면 원래 있던 리스트로 페이지 정보를 가지고 리턴
    const closeDialog = () =>{
        setResult(null)
        moveToList({pathName:'/notice/list', pageParam:{page:page.page, size:page.size}})
    }


    // 모달 창 닫은 후 동작
    const closeModal = () => {
        if (result === 'DELETE SUCCESS') {
            moveToList({ pathName: '/notice/list', pageParam: { page: `${page.page}`, size: `${page.size}` } })
        } else {
            moveToRead({ pathName: '/notice/read', num: notiNo, totalPage: serverData.totalCount })
        }
    }



    const handleChangeNotice = (e) => {
        notice[e.target.name] = e.target.value
        setNotice({...notice})
        console.log(notice)
    }

    return(
        <div className="m-2 p-4">
            <ContentHeader pathName={"/notice/"} serverData={serverData} page={page} moveTo={moveToList} />
            <Card className="p-2 m-2 min-h-[10rem]">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Notice
                            </Typography>
                        </div>
                    </div>
                </CardHeader>
                <CardBody>
                <form>
                    <div className="grid grid-cols-auto gap-4 grid-rows-auto flex items-stretch flex items-center flex flex-box mt-2 mb-2 ml-2 ">
                        <div className="col-start-1 col-end-3 p-1">
                            <Input label="제목" name="title" onChange={handleChangeNotice} value={notice.title} />
                        </div>
                        <div className="col-start-3 p-1">
                            <div className="w-full">
                                <Input label="작성자" onChange={handleChangeNotice}  value={notice.writer} />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="p-3">
                        <Textarea label="내용" name="content" onChange={handleChangeNotice} value={notice.content}/>
                    </div>
                    <div className="p-3 justify-self-end flex justify-center">

                    </div>
                </form>
                </CardBody>
                <CardFooter>
                    <div className="flex justify-end p-4 space-x-4">
                        <Button Button size="sm" color="red" className="rounded-md" onClick={handleClickDelete}>
                            {result ?<DialogResult
                                title={'공지사항'}
                                content={`${result}`}
                                callbackFn={closeDialog}
                                open={result !== null}
                                setOpen={setOpen}
                            />: <></> }삭제
                        </Button>
                        <Button Button size="sm" color="blue" className="rounded-md" onClick={handleClickModify}>
                            {result ?<DialogResult
                                title={'공지사항'}
                                content={`${result}`}
                                callbackFn={closeDialog}
                                open={result !== null}
                                setOpen={setOpen}
                            />: <></> }수정</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
export default NoticeModifyComponent;