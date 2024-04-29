import {useEffect, useState} from "react";
import {Button} from "@material-tailwind/react";
import {deleteOne, getOne, putOne, putOneNotice} from "../../api/noticeApi";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";
const intiState = {
    notiNo: 0,
    title:'',
    content:'',
    writer:''
}

const NoticeModifyComponent = ({notiNo}) => {
    console.log(notiNo + "번 게시물 수정")
    const [notice, setNotice] = useState({...intiState})
    const [result, setResult] = useState(null)
    const {moveToList, moveToRead} = useCustomMove()

    useEffect(() => {

        getOne(notiNo).then(data => setNotice(data))

    }, [notiNo])

    const handleClickModify = () => { // 수정버튼 클릭시

        putOneNotice(notice).then(data => {
            console.log("modify result : " + data)

        }).catch(console.log("Fail"))
    }
    const handleClickDelete = () => {
        deleteOne(notiNo).then(data => {
            console.log("delete result : " + data)
        })
    }

    const handleChangeNotice = (e) => {
        notice[e.target.name] = e.target.value
        setNotice({...notice})
        console.log(notice)
    }

    return(
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">

            <div className="flex justify-center mt-10">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">NotiNo</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-grey-100">
                        {notice.notiNo}
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100">
                        {notice.writer}
                    </div>

                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100"
                           name="title"
                           type={'text'}
                           value={notice.title}
                           onChange={handleChangeNotice}
                    >
                    </input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">CONTENT</div>
                    <textarea className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100"
                           name="content"
                           value={notice.content}
                           onChange={handleChangeNotice}
                    >
                    </textarea>
                </div>
            </div>

            <div className="flex justify-end p-4">
                <Button Button size="sm" color="red" className="rounded-md" onClick={handleClickDelete}>삭제</Button>
                <Button Button size="sm" color="blue" className="rounded-md" onClick={handleClickModify}>수정</Button>
            </div>
        </div>
    )
}
export default NoticeModifyComponent;