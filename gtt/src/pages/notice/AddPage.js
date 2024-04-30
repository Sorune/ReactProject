import NoticeAddComponent from "../../components/notice/NoticeAddComponent";
import {useRecoilValue} from "recoil";
import {pageState} from "../../atoms/pageState";


const AddPage = () =>{

    const page = useRecoilValue(pageState);

    return(
    <div className="p-4 w-full bg-white">
        <div className="text-3xl font-extrabold">
            Add Page
        </div>
        <NoticeAddComponent page={page}/>
    </div>
    );
}

export default AddPage;