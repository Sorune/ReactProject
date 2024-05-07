import SidebarLayout from "../../layouts/SidebarLayout";
import React, {useEffect, useState} from "react";
import {getList} from "../../api/newsApi";
import {getPlayerList} from "../../api/playerApi";
import {useRecoilState} from "recoil";
import {userState} from "../../atoms/userState";
import {tokenState} from "../../atoms/tokenState";
import {MyPostSectionCard} from "../../components/common/MyPostSectionCard";
import {getNoticeList} from "../../api/noticeApi"

const initState = {
    dtoList:[],
    pageNumList:[],
    pageRequestDTO: null,
    prev:false,
    next:false,
    totalCount:0,
    prevPage:0,
    nextPage:0,
    totalPage:0,
    current:0
}


const MyPost = () => {
    const [newsServerData, setNewsServerData] = useState(initState)
    const [noticeServerData, setNoticeServerData] = useState(initState)
    const [playerServerData, setPlayerServerData] = useState(initState)
    const [refresh,setRefresh] = useState(false)

    const [userInfo] = useRecoilState(userState)
    const [tokenInfo] = useRecoilState(tokenState)
    useEffect(() => {
        getList({page: 1, size: 5}).then(data => {
            setNewsServerData(data)
        })
        getPlayerList({page:1, size:5}).then(data => {
            setPlayerServerData(data)
        })
        getNoticeList({page:1, size:5}).then(data =>{
            setNoticeServerData(data)
        })
    },[refresh]);

    return(
        <SidebarLayout>
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                My Post
            </h1>
                <section className="px-8 py-8 lg:py-18 ">
                    <div className="container mx-auto">
                        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                            <MyPostSectionCard
                                pathName="/news/list"
                                serverData={newsServerData}
                                sectionTitle={"News"}
                            />
                            <MyPostSectionCard
                                pathName="/notice/list"
                                serverData={noticeServerData}
                                sectionTitle={"Notice"}
                            />
                            <MyPostSectionCard
                                pathName="/player/list"
                                serverData={playerServerData}
                                sectionTitle={"Player"}
                            />
                        </div>
                    </div>
                </section>
            <div className="grid grid-cols-2 gap-5">
                <div className="col-start-1">

                </div>
                <div className="col-start-1">

                </div>
            </div>
        </SidebarLayout>
    )
}
export default MyPost;