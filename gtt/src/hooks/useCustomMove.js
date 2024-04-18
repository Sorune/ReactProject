import {useMemo, useState} from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import {useMenu} from "@material-tailwind/react";

const getNum = (param,defaultValue) => {
    if(!param){
        return defaultValue
    }
    return parseInt(param)
}

const useCustomMove = () => {
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    const [refresh, setRefresh] = useState(false);
    const [page, setPage] = useState(getNum(queryParams.get('page'), 1));
    const [size, setSize] = useState(getNum(queryParams.get('size'), 10));
    const queryDefault = createSearchParams({ page, size }).toString();

    const moveToList = ({ pathName, pageParam = {} }) => {
        let queryStr = "";
        let updatedRefresh = !refresh;  // refresh 상태를 토글

        if (pageParam) {
            const pageNum = getNum(parseInt(pageParam.page), 1);
            const sizeNum = getNum(pageParam.size, 10);
            setPage(pageNum)
            setSize(sizeNum)
            queryStr = createSearchParams({ page: pageNum, size: sizeNum }).toString();
        } else {
            queryStr = queryDefault;
        }
        navigate({ pathname: pathName, search: queryStr });

    };
    const moveToModify = ({ pathName, num }) => {
        navigate({
            pathname: `${pathName}/${num}`,
            search: queryDefault,
        });
    };

    const moveToRead = ({ pathName, num }) => {
        navigate({
            pathname: `${pathName}/${num}`,
            search: queryDefault,
        });
    };

    console.log("page : "+page)
    console.log("size : "+size)
    return { moveToList, moveToModify, moveToRead, page, size, refresh };
};

export default useCustomMove;