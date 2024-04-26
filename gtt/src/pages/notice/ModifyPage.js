import {useNavigate} from "react-router-dom";

const ModifyPage = ({notiNo}) => {

    const  navigate = useNavigate()

    const moveToRead = () => {
        navigate({pathname:`/notice/read/${notiNo}`})
    }

    const moveToList = () =>{
        navigate({pathname:`/notice/list`})
    }


    return(
        <div className="text-3xl font-extrabold">
            Modify Page
        </div>
    )
}
export default ModifyPage;