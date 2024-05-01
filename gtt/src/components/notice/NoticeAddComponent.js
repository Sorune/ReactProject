import {useState} from "react";
import {Button, Card, CardBody, CardHeader, Input, Textarea, Typography} from "@material-tailwind/react";
import {postAdd} from "../../api/noticeApi";
import useCustomMove from "../../hooks/useCustomMove";
import {useSearchParams} from "react-router-dom";
import {DialogResult} from "../common/DialogResult";
import ContentHeader from "../common/ContentHeader";

// 초기활를 담당
const initState = {
    title:'',
    writer:'',
    content:'',
    regDate:''
}
const NoticeAddComponent = ({page}) =>{

    const [notice, setNotice] = useState(initState)
    const [serverData, setServerData] = useState(initState)

    // 결과데이터가 있는 경우 modal을 보여준다.
    const [result, setResult] = useState(null) // 결과상태

    const handleChangeNotice = (e)=> {
        notice[e.target.name] = e.target.value
        setNotice({...notice})
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const handleClickAdd = () => {
        //console.log(notice)
        postAdd(notice).then(result => {
            //초기화
            setNotice(initState)
            setResult(result.notiNo)
        }).catch(e => {
            console.error(e)
        })
    }
    // 모달을 닫으면 원래 있던 리스트로 페이지 정보를 가지고 리턴
    const {moveToList} = useCustomMove()
    const closeDialog = () =>{
        setResult(null)
        moveToList({pathName:'/notice/list', pageParam:{page:page.page, size:page.size}})
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
            </Card>
            <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
                <Button onClick={handleClickAdd}>ADD
                    {result ?<DialogResult
                        title={'공지사항'}
                        content={`새로운 게시물${result} 번 게시물이 추가되었습니다.`}
                        callbackFn={closeDialog}
                        open={result !== null}
                        setOpen={setOpen}
                    />: <></> }</Button>
            </div>

        </div>
    )
}
export default NoticeAddComponent;