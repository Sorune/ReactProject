import { useState} from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

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
    const [currentPage, setCurrentPage] = useState()
    const [totalPage, setTotalPage] = useState()
    const queryDefault = createSearchParams({ page, size }).toString();

    const moveToList = ({ pathName, pageParam = {} }) => {
        let queryStr = "";

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

    const moveToRead = ({ pathName, num, totalPage }) => {
        console.log(totalPage)
        setCurrentPage(num)
        setTotalPage(parseInt(totalPage))
        console.log(num,currentPage,totalPage)
        navigate({
            pathname: `${pathName}/${num}`,
            search: queryDefault,
        });
    };

    const loadToList =({pageParam :pageParam, pathName:pathName})=>{
        let queryStr = "";

        if (pageParam) {
            const pageNum = getNum(parseInt(pageParam.page), 1);
            const sizeNum = getNum(pageParam.size, 10);
            queryStr = createSearchParams({ page: pageNum, size: sizeNum }).toString();
        } else {
            queryStr = queryDefault;
        }
        navigate({ pathname: `.`, search: queryStr });
        return {pageParam,pathName}
    }
    return { moveToList, moveToModify, moveToRead, loadToList, getNum, page, size, refresh,currentPage,totalPage,setTotalPage,setCurrentPage };
};

export default useCustomMove;