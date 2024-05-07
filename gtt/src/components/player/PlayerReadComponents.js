import React, {useCallback, useEffect, useState} from "react";
import {getOnePlayer, getPlayerList} from "../../api/playerApi";
import useCustomMove from "../../hooks/useCustomMove";
import {useRecoilValue} from "recoil";
import {pageState} from "../../atoms/pageState";
import PlayerButtons from "./list/PlayerButtons";
import {
    Avatar,
    Button,
    Card,
    CardBody,
    Rating,
    Typography,
    IconButton,
    CardHeader,
    Tooltip, CardFooter
} from "@material-tailwind/react";
import PCommentList from "../playerComment/PlayerCommentListComponent"
import PCommentAdd from "../playerComment/PlayerCommentAddComponent"
import {API_SERVER_HOST} from "../../api/filesApi";

const initState = {
    pno : 0,
    age : 0,
    nickName : '',
    realName : '',
    teamName : '',
    position : '',
    birthDate : null
}



const ReadComponent = ({pno}) => {
    const [player, setPlayer] = useState(initState)
    const page = useRecoilValue(pageState)
    const { moveToModify,moveToList } = useCustomMove();



    useEffect(() => {
        getOnePlayer(pno).then(data => {
            console.log(data)
            setPlayer(data)
            console.log(player.playerImage)
        })
    }, [pno])

    return (
        <div>
            <PlayerButtons page={page} pathName={'/player/'} moveTo={moveToList} pno={pno} moveToModify={moveToModify}/>

            <div className="mt-100 m-2 p-4">
                <Card className="w-full max-w-[100rem] shadow-lg p-10">
                    <CardHeader floated={false} color="blue-gray" >
                        <div className="text-center">
                            {player.playerImage === null ?
                                <img
                                    className="max-w-full"
                                    src="https://i.namu.wiki/i/eqYqt-fiIALMuq4l3lX4fp5TEBXitJagvp9dqH12s2s-iWVxaB0K0gqM4EHf06jx93ju4J4muw_Pd3smxZC7pb2bI2de5qy-yMvVC9pbfyHJqbv4nDZ7_h6NhGEgjRGwA9oy_4Qc8oL9Y_hkJB2Kzw.webp"
                                    alt="ui/ux review check"
                                />
                                :
                                <img
                                    className="max-w-full"
                                    src={`${API_SERVER_HOST}/api/files/${player.playerImage}`}
                                    alt="playerImage"
                                />
                            }
                            <div
                                className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 "/>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray" className="font-medium text-3xl">
                                <strong>{player.nickName}</strong>
                                <small className="ml-3 text-lg font-bold">{player.realName}</small>
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <div className="grid grid-cols-3">
                            <Typography color="gray" className="font-bold col-start-1 mb-3">
                                소속팀 : {player.teamName}
                            </Typography>
                            <Typography color="gray" className="font-bold col-start-2 mb-3">
                                나이 : {player.age}
                            </Typography>
                            <Typography color="gray" className="font-bold col-start-3 mb-3">
                                생일 : {player.birthDate}
                            </Typography>
                            <Typography color="gray" className="font-bold col-start-1 mb-3">
                                포지션 : {player.position}
                            </Typography>
                        </div>

                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content={player.position}>
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                    <img src= "../../public/img/position-mid.png" />
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                <div className="flex items-center justify-center gap-2 font-bold text-blue-gray-500">

                </div>
                <br/>
                <br/><hr/><br/>
                <PCommentAdd/>
                <br/><hr/><br/>
                <PCommentList/>

            </div>
        </div>
    )
}
export default ReadComponent
