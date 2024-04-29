import React, {useCallback, useEffect, useState} from "react";
import {getPlayerList} from "../../api/playerApi"
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";
import {Avatar, Button, Card, CardBody, IconButton, Typography} from "@material-tailwind/react";
import {useLocation} from "react-router-dom";
import {useRecoilState} from "recoil";
import {pageState} from "../../atoms/pageState";

import PlayerButtons from "./list/PlayerButtons";
import PlayerListHeader from "../player/list/PlayerListHeader";

const initState = {
    dtoList:[],
    pageNumList:[],
    pageRequestDTO:null,
    prev: false,
    next: false,
    totalCount:0,
    prevPage:0,
    nextPage:0,
    totalPage:0,
    current:0
}
const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];

const ListComponent = () => {
    const pathName = useLocation().pathname
    const {refresh,moveToList, moveToAdd, moveToRead, setRefresh} = useCustomMove()
    const [page,setPage] = useRecoilState(pageState)
    const [serverData, setServerData] = useState(initState)
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        setFetching(true)

        getPlayerList({page:page.page, size:page.size}).then(data => {
            console.log(data)
            setServerData(data)
            setFetching(false)
        })
    }, [refresh])

    return (
        <section className="min-h-screen py-8 px-8 lg:py-28">
            <div className="container mx-auto">
                <PlayerListHeader TABS={TABS} moveTo={moveToAdd} pathName={'/player/add'} />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {serverData.dtoList.map((player) => (
                        <Card className="rounded-lg bg-[#FAFAFA]" shadow={false}>
                            <CardBody className="text-center">
                                <Avatar
                                    src=''
                                    alt='null'
                                    variant="circular"
                                    size="xxl"
                                    className="mx-auto mb-6 object-top"
                                />
                                <Typography variant="h5" color="blue-gray" className="!font-medium text-lg">
                                    {player.nickName}  ({player.teamName})
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="mb-2 !text-base !font-semibold text-gray-600"
                                >
                                    {player.realName}
                                </Typography>

                                <Button onClick={()=> moveToRead({pathName:'/player/read',num:player.pno,totalPage:serverData.totalCount})}>
                                    READ
                                </Button>

                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
            <PageComponent serverData={serverData} movePage={moveToList} pathName={pathName}/>

        </section>
    )
}

export default ListComponent