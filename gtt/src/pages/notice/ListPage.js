import {useSearchParams} from "react-router-dom";
import ListComponent from "../../components/notice/NoticeListComponent";

const ListPage = () => {

    const [queryparams] = useSearchParams()


    // list?page=1&size=10 parsInt로 인트형으로 변환
    const page = queryparams.get("page") ? parseInt(queryparams.get("page")) : 1
    const size = queryparams.get("size") ? parseInt(queryparams.get("size")) : 10

    return(
           <div className="p-4 w-full bg-white">
               <div className="text-3xl font-extrabold">
                   List Page {page}----{size}
               </div>
               <ListComponent/>
           </div>
    )
}
export default ListPage;