
// 초기값 세팅
import useCustomMove from "../../hooks/useCustomMove";
import {useEffect, useState} from "react";
import {getList} from "../../api/noticeApi";
import PageComponent from "../common/PageComponent";
import {useRecoilState} from "recoil";
import {pageState} from "../../atoms/pageState";
import {useLocation} from "react-router-dom";

const initState = {
    dtoList:[],
    pageNumList:[],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}

const ListComponent = () => {
    const { moveToList, refresh, moveToRead} = useCustomMove()
    const pathName = useLocation().pathname
    const [page,setPage] = useRecoilState(pageState)
    const [serverData, setServerData] = useState(initState)

    useEffect(() => {
        getList({page:page.page, size:page.size}).then(data =>{
            console.log(data)
            setServerData(data)
        })
    }, [refresh]
    )

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2}">
            <div className="flex flex-wrap mx-auto justify-center p-6">
                {serverData.dtoList.map(notice =>
                <div key={notice.notiNo}
                    className="w-full min-w-[400px] p-2 m-2 rounded shadow-md"
                    onClick={() => moveToRead({pathName:'/notice/read', num:notice.notiNo, totalPage:serverData.totalCount})}
                >
                    <div className="flex ">
                        <div className="font-extrabold text-2xl p-2 w-1/12">
                            {notice.notiNo}
                        </div>
                        <div className="text-1xl m-1 p-2 w-8/12 font-extrabold">
                            {notice.title}
                        </div>
                        <div className="text-1xl m-1 p-2 w-2/10 font-medium">
                            {notice.regDate}
                        </div>
                    </div>
                </div>
                )}
            </div>
              <PageComponent serverData={serverData} movePage={moveToList} pathName={pathName}/>
        </div>
    )
}
export default ListComponent;
