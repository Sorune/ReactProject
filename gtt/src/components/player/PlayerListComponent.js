import React, {useCallback, useEffect, useState} from "react";
// import {getPlayerList} from "../../api/playerApi"
import {getPlayerList} from "../../api/ServerPlayerApi"
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";
import {Avatar, Button, Card, CardBody, CardHeader, IconButton, Typography} from "@material-tailwind/react";
import {useLocation} from "react-router-dom";
import {useRecoilState} from "recoil";
import {pageState} from "../../atoms/pageState";
import PlayerListHeader from "../player/list/PlayerListHeader";
import {API_SERVER_HOST} from "../../api/filesApi";

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

const testTeam ={
    teamName:"Gen.G",
    teamImg:"/img/team/geng.png"
}

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
        <section className="min-h-screen">
            <div className="container mx-auto">
                <PlayerListHeader TABS={TABS} moveTo={moveToAdd} pathName={'/player/add'} />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4" >
                    {serverData.dtoList.map((player) => (
                        <Card
                            className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-t from-black/80 via-black/50"
                            onClick={() => moveToRead({ pathName: '/player/read', num: player.pno, totalPage: serverData.totalCount })}
                        >
                            {player.playerImage === null ?
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.namu.wiki/i/eqYqt-fiIALMuq4l3lX4fp5TEBXitJagvp9dqH12s2s-iWVxaB0K0gqM4EHf06jx93ju4J4muw_Pd3smxZC7pb2bI2de5qy-yMvVC9pbfyHJqbv4nDZ7_h6NhGEgjRGwA9oy_4Qc8oL9Y_hkJB2Kzw.webp')] bg-cover bg-center"
                                />
                                :
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        margin: 0,
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: 0,
                                        backgroundImage: `url('${API_SERVER_HOST}/api/files/${player.playerImage}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                            }

                            <CardBody className="relative py-14 px-6 md:px-12 opacity-0 hover:opacity-100">

                                <Typography
                                    variant="h2"
                                    color="white"
                                    className="mb-6 font-medium leading-[1.5]"
                                >
                                    {player.nickName}
                                </Typography>
                                <Typography variant="h5" className="mb-4 text-white">
                                    {player.realName}
                                </Typography>
                                <Avatar
                                    size="xl"
                                    variant="circular"
                                    alt="tania andrew"
                                    src={testTeam.teamImg}
                                />
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
            <PageComponent serverData={serverData} movePage={moveToList} pathName={pathName} />

        </section>
    )
}

export default ListComponent