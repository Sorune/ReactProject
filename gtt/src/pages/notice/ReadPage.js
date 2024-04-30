import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useCallback} from "react";
import NoticeReadComponent from "../../components/notice/NoticeReadComponent";
import ContentHeader from "../../components/common/ContentHeader";

    const ReadPage =() =>{
        const {notiNo} =useParams() // notiNo을 담고있음
        const [queryParams] = useSearchParams()

        const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
        const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10


        return(

            <div className="text-3xl font-extrabold w-full bg-white mt-6">
                <div className="text-2xl">
                    Read Page Component{notiNo}
                </div>
                <NoticeReadComponent notiNo={notiNo} page={page} size={size}></NoticeReadComponent>
             </div>
        );
}
export default ReadPage;