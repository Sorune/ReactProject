import {Typography} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import {getList} from "../api/newsApi";
import SidebarLayout from "../layouts/SidebarLayout";
import {MainSectionCard} from "../components/common/MainSectionCard";
import {getPlayerList} from "../api/playerApi";
import {useRecoilState} from "recoil";
import {userState} from "../atoms/userState";
import {tokenState} from "../atoms/tokenState";
import {getNoticeList} from "../api/noticeApi";
import {getBoardList} from "../api/boardApi";
import {getFreeList} from "../api/freeBoardApi";

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

const MainPage= () =>{
    const [newsServerData, setNewsServerData] = useState(initState)
    const [noticeServerData, setNoticeServerData] = useState(initState)
    const [playerServerData, setPlayerServerData] = useState(initState)
    const [boardServerData,setBoardServerData] = useState(initState)
    const [freeServerData, setFreeServerData]=useState(initState)
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
        getBoardList({page:1, size:5}).then(data =>{
            setBoardServerData(data)
        })
        getFreeList({page:1, size:5}).then(data =>{
            setFreeServerData(data)
        })
    },[refresh]);
    return (
            <SidebarLayout>
                <section className="px-8 py-8 lg:py-18 ">
                    <div className="container mx-auto">
                        <Typography
                            variant="h2"
                            color="blue-gray"
                            className="mb-4 !text-2xl lg:!text-4xl"
                        >
                            The heartfelt testimonials of our community
                        </Typography>
                        <Typography
                            variant="lead"
                            className="max-w-3xl !text-gray-500 mb-10 lg:mb-20"
                        >
                            From life-enhancing gadgets to unparalleled customer support, and
                            transformative learning opportunities.
                        </Typography>
                        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                            <MainSectionCard serverData={noticeServerData} sectionTitle={"Notice"} path={"notice"}/>
                            <MainSectionCard serverData={newsServerData} sectionTitle={"News"} path={"news"}/>
                            <MainSectionCard serverData={boardServerData} sectionTitle={"Board"} path={"board"}/>
                            <MainSectionCard serverData={freeServerData}  sectionTitle={"FreeBoard"} path={"free"}/>
                        </div>
                    </div>
                </section>
            </SidebarLayout>

    );
}

export default MainPage;
