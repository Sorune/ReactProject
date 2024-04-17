import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const getNum = (param,defaultValue) => {
    if(!param){
        return defaultValue
    }
    return parseInt(param)
}

const useCustomMove = () => {
    const navigate = useNavigate();
    const [queryParams] = useSearchParams()
    const [refresh,setRefresh] = useState(false)
    const page = getNum(queryParams.get('page'),1)
    const size = getNum(queryParams.get('size'),10)
    const queryDefault = createSearchParams({page,size}).toString()
    const moveToList = (pageParma) => {
        let queryStr = ""
        if(pageParma){
            const pageNum = getNum(pageParma.page,1)
            const sizeNum = getNum(pageParma.size,10)

            queryStr = createSearchParams({page:pageNum,size:sizeNum}).toString()
        } else {
            queryStr = queryDefault
        }
        setRefresh(!refresh)
        navigate({pathname:`../list`,search:queryStr})
    }
    const moveToModify = (num)=>{
        console.log(queryDefault)

        navigate({
            pathname: `../modify/${num}`,
            search:queryDefault
        })
    }
    const moveToRead = (num)=>{
        console.log(queryDefault)

        navigate({
            pathname:`../read/${num}`,
            search:queryDefault
        })
    }
    return {moveToList,moveToModify,moveToRead,page,size,refresh}
}


export default useCustomMove