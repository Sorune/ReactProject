import {useParams} from "react-router-dom";
import NoticeReadComponent from "../../components/notice/NoticeReadComponent";




    const ReadPage =() =>{
        const {notiNo} =useParams() // 번홀을 담고있음
      /*  const [queryParams] = useSearchParams()

        const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
        const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

        const querytStr = createSearchParams({page, size}).toString()

        const navigate = useNavigate()

        const moveToModify = useCallback((notiNo) =>{
            navigate({
                pathname:`/notice/modify/${notiNo}`,
                search: querytStr
            })
        },[notiNo, page, size])

        const moveToList = useCallback(()=>{
            navigate({pathname:`/notice/list`, search:querytStr})
        }, [page,size])
*/
        return(
                    <div className="text-3xl font-extrabold w-full bg-white mt-6">
                        <div className="text-2xl">
                            Read Page Component{notiNo}
                        </div>
                        <NoticeReadComponent notiNo={notiNo}></NoticeReadComponent>
                     </div>
        );
}
export default ReadPage;