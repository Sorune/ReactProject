import React, {useCallback, useEffect, useState} from "react";
import {getOnePlayer, getPlayerList} from "../../api/playerApi";
import useCustomMove from "../../hooks/useCustomMove";
import {useRecoilValue} from "recoil";
import {pageState} from "../../atoms/pageState";
import PlayerButtons from "./list/PlayerButtons";
import {Avatar, Button, Card, CardBody, Rating, Typography, IconButton} from "@material-tailwind/react";
import PCommentList from "../playerComment/PlayerCommentListComponent"
import PCommentAdd from "../playerComment/PlayerCommentAddComponent"

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
        })
    }, [pno])

    return (
        <div>
            <PlayerButtons page={page} pathName={'/player/'} moveTo={moveToList} pno={pno} moveToModify={moveToModify}/>

            <div className="mt-100 m-2 p-4">
                {makeDiv('Pno', player.pno)}
                {makeDiv('Age', player.age)}
                {makeDiv('NickName', player.nickName)}
                {makeDiv('RealName', player.realName)}
                {makeDiv('TeamName', player.teamName)}
                {makeDiv('Position', player.position)}
                {makeDiv('BirthDate', player.birthDate)}

                <br/>
                <br/>
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

const makeDiv = (title, value) =>
    <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">{title}</div>
            <div className="w-4/5 p-6 rounded-r border-solid shadow-md">{value}</div>
        </div>
    </div>

export default ReadComponent
