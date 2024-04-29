import {useNavigate} from "react-router-dom";
import NoticeModifyComponent from "../../components/notice/NoticeModifyComponent";
const ModifyPage = ({notiNo}) => {

    const  navigate = useNavigate()

    const moveToRead = () => {
        navigate({pathname:`/notice/read/${notiNo}`})
    }

    const moveToList = () =>{
        navigate({pathname:`/notice/list`})
    }


    return(
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Modify Page
            </div>

            <NoticeModifyComponent notiNo={notiNo}/>

        </div>
    )
}
export default ModifyPage;