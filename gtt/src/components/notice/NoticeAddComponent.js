import {useState} from "react";
import {Button} from "@material-tailwind/react";
import {postAdd} from "../../api/noticeApi";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";
import {useSearchParams} from "react-router-dom";

// 초기활를 담당
const initState = {
    title:'',
    writer:'',
    content:'',
    regDate:''
}
const NoticeAddComponent = () =>{
    const [queryparams] = useSearchParams()
    const page = queryparams.get("page") ? parseInt(queryparams.get("page")) : 1
    const size = queryparams.get("size") ? parseInt(queryparams.get("size")) : 10

    const [notice, setNotice] = useState(initState)

    // 결과데이터가 있는 경우 modal을 보여준다.
    const [result, setResult] = useState(null) // 결과상태

    const handleChangeNotice = (e)=> {
        notice[e.target.name] = e.target.value

        setNotice({...notice})
    }

    const handleClickAdd = () => {
        //console.log(notice)
        postAdd(notice).then(result => {
            console.log(result)
            //초기화
            setNotice(initState)
            setResult(result.notiNo)
        }).catch(e => {
            console.error(e)
        })
    }
const {moveToList} = useCustomMove()
    const closeModal = () =>{
        setResult(null)
        //moveToList({'list' {page:page,size:size}})
    }

    return(


        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {/*모달 처리*/}
            {result ? <ResultModal title={'공지사항'} content={`새로운 게시물${result} 번 게시물이 추가되었습니다.`}
                                   callbackFn={closeModal}/>: <></> }
            <div className="flex justify-center">

                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                           name="title"
                           type={'text'}
                           value={notice.title}
                           onChange={handleChangeNotice} >
                    </input>

                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                           name="writer"
                           type={'text'}
                           value={notice.writer}
                           onChange={handleChangeNotice}
                           >
                    </input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">CONTENT</div>
                    <textarea className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                              name="content"
                              value={notice.content}
                              onChange={handleChangeNotice}
                              >
                    </textarea>
                </div>
            </div>

            <div className="flex justify-end">
                <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
                    <Button onClick={handleClickAdd}>ADD</Button>
                </div>
            </div>



        </div>
    )
}
export default NoticeAddComponent;