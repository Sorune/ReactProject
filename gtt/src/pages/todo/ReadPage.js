import { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {
    const {tno} = useParams();
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
    const queryStr = createSearchParams({page,size}).toString();

    // 수정 페이지로 이동
    const moveToModify = useCallback((tno)=>{
        navigate({
            pathname:'/todo/modify/${tno}',
            search: queryStr
        });
    },[tno,page,size])
    // 리스트로 이동
    const moveToList = useCallback(()=>{
        navigate({
            pathname:'/todo/list',
            search: queryStr
        },[page,size]);
    })

    return (
        <div className="font-extrabold w-full bg-white mt-6">
            <div className="text-3xl font-extrabold">
                Todo Read Page Component {tno}
                <div>
                    <button onClick={()=> moveToModify({tno})}>Test modify</button>
    
                    <button onClick={()=> moveToList()}>Test List</button>
                </div>
            </div>
            <ReadComponent tno={tno}></ReadComponent>
        </div>
    );
}

export default ReadPage;