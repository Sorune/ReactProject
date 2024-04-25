import {useCallback} from "react";
import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";
import ReadComponent from "../../components/player/PlayerComponents";

const ReadPage = () => {
    const moveToList = useCallback(() => {
        navigate({pathname:'/player/list', search:queryStr})
    },[page, size])

    return (
        <div className="font-extrabold w-full bg-white mt-6">
            <div className="text-2xl">
            Player Read Pages Component {pno}
            </div>

            <ReadComponent pno={pno}></ReadComponent>
        </div>
    );
}

export default ReadPage;