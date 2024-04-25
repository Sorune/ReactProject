import {useEffect, useState} from "react";
import {getPlayerList} from "../../api/playerApi"
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal"
import host from "../../api/playerApi"
import PageComponent from "../common/PageComponent";
import {Avatar, Card, CardBody, IconButton, Typography} from "@material-tailwind/react";

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

const ListComponent = () => {
    const {page, size, refresh, moveToList,moveToRead} = useCustomMove()
    const [serverData, setServerData] = useState(initState)
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        setFetching(true)

        getPlayerList({page, size}).then(data => {
            console.log(data)
            setServerData(data)
            setFetching(false)
        })
    }, [page, size, refresh])

    return (
        <section className="min-h-screen py-8 px-8 lg:py-28">
            <div className="container mx-auto">
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

                                {/* moveToRead 사용시 오류가 있어 하이퍼링크로 대체 */}
                                <div className="flex items-center justify-center gap-1.5"
                                     onClick={() => moveToRead(player.pno)}>
                                    <IconButton variant="text" color="gray">
                                        <i className="fa-brands fa-twitter text-lg"/>
                                    </IconButton>
                                    <div>
                                        <a href={`/player/read/${player.pno}`}>
                                            <button>List</button>
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>

            {/* 페이지 넘기기 안됌 */}
            <PageComponent serverData={serverData} movePage={moveToList}/>

        </section>
    )
}


export default ListComponent