import {useEffect, useState} from "react";
import {Button} from "@material-tailwind/react";

const intiState = {
    notiNo: 0,
    title:'',
    content:'',
    writer:''
}

const NoticeModifyComponent = ({notiNo}) => {
    const [notice, setNotice] = useState({...intiState})

    useEffect(() => {

    }, [notiNo])

    return(
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            <div className="flex justify-end p-4">
                <Button Button size="sm" color="red" variant="text" className="rounded-md">삭제</Button>
                <Button Button size="sm" color="blue" variant="text" className="rounded-md">수정</Button>
            </div>
        </div>
    )
}
export default NoticeModifyComponent;