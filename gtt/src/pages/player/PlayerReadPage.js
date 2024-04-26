import {useCallback} from "react";
import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";
import ReadComponent from "../../components/player/PlayerReadComponents";

const PlayerReadPage = () => {
    const {pno}  = useParams()
    const navigate = useNavigate()
    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10
    const queryStr = createSearchParams({page, size}).toString()

    const moveToList = useCallback(() => {
        navigate({pathname:'/player/list', search:queryStr})
    },[page, size])

    const moveToModify = useCallback(() => {
        navigate({pathname:`/player/modify/${pno}`})
    },[pno])

    return (
        <div className="font-extrabold w-full bg-white mt-6">
            <div className="text-2xl">
            Player Read Page
            </div>

            <ReadComponent pno={pno}></ReadComponent>
        </div>
    );
}

export default PlayerReadPage;