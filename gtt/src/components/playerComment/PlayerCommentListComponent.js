import {Avatar, Button, Card, CardBody, CardFooter, CardHeader, Typography} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
import {useRecoilState} from "recoil";
import {pageState} from "../../atoms/pageState";
import {getPlayerList} from "../../api/playerApi";
import {getPCommentList} from "../../api/playerCommentApi";

function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-700"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            />
        </svg>
    );
}

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

const PlayerCommentListComponent = () => {
    const {refresh,moveToList, moveToAdd, moveToRead, setRefresh} = useCustomMove()
    const [page,setPage] = useRecoilState(pageState)
    const [serverData, setServerData] = useState(initState)
    const pno = useLocation().pathname.split("/")[3]


    useEffect(() => {
        getPCommentList({page:page.page, size:page.size}, pno).then(data => {
            console.log(data)
            setServerData(data)
        })
    }, [refresh])

    return (
        <div>
            {serverData.dtoList.map((playerComment) => (
                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader color="transparent" floated={false} shadow={false}
                                className="mx-0 flex items-center gap-4 pt-0 pb-8">
                        <Avatar size="lg" variant="circular"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                alt="team logo"/>
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    ({playerComment.comWriter})
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                </div>
                            </div>
                            <Typography color="blue-gray">({playerComment.playerComNo}</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography>
                            ({playerComment.comment})
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="text" className="flex items-center gap-2">
                            Modify{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                        <Button>Remove</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default PlayerCommentListComponent