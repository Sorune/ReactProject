
import NoticeModifyComponent from "../../components/notice/NoticeModifyComponent";
import {useLocation} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {pageState} from "../../atoms/pageState";
const ModifyPage = () => {
    // 현재페이지의 pathname의 /를 자른 후 순서  http://localhost:3000[0]/notice[1]/modify[2]/104[3]
    const notiNo = useLocation().pathname.split("/")[3]
    const page = useRecoilValue(pageState);
    return(
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Modify Page
            </div>

            <NoticeModifyComponent notiNo={notiNo} page={page}/>

        </div>
    )
}
export default ModifyPage;