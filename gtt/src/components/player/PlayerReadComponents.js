import React, {useCallback, useEffect, useState} from "react";
import {getOnePlayer} from "../../api/playerApi";
import useCustomMove from "../../hooks/useCustomMove";
import {useRecoilValue} from "recoil";
import {pageState} from "../../atoms/pageState";
import PlayerButtons from "./list/PlayerButtons";
import { Rating } from "@material-tailwind/react";

const initState = {
    pno : 0,
    age : 0,
    nickName : '',
    realName : '',
    teamName : '',
    position : '',
    birthDate : null
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

function RatedIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
        >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
    );
}

function UnratedIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
        </svg>
    );
}


const ReadComponent = ({pno}) => {
    const [player, setPlayer] = useState(initState)
    const page = useRecoilValue(pageState)
    const { moveToModify,moveToList } = useCustomMove();
    const [rated, setRated] = React.useState(4);



    useEffect(() => {
        getOnePlayer(pno).then(data => {
            console.log(data)
            setPlayer(data)
        })
    }, [pno])

    return (
        <div>
            <PlayerButtons page={page} pathName={'/player/'} moveTo={moveToList} pno={pno} moveToModify={moveToModify}/>

            <div className="border-2 border-sky-200 mt-100 m-2 p-4">
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
                    {rated}
                    <Rating
                        value={4}
                        ratedColor="red"
                        ratedIcon={<RatedIcon/>}
                        unratedIcon={<UnratedIcon/>}
                        onChange={(value) => setRated(value)}
                    />
                </div>
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
