import React, {useCallback, useRef, useState} from "react";
import {postAdd} from "../../api/playerApi"
import FetchingModal from "../common/FetchingModal"
import ResultModal from "../common/ResultModal"
import useCustomMove from "../../hooks/useCustomMove";
import {createSearchParams, useSearchParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {pageState} from "../../atoms/pageState";
import ContentHeader from "../common/ContentHeader";
import { startTransition } from 'react';
import PlayerButtons from "./list/PlayerButtons";

const initState = {
    age : 0,
    nickName : '',
    realName : '',
    teamName : '',
    position : '',
    birthDate : null
}

const PlayerAddComponent = () => {
    const [player, setPlayer] = useState({...initState})
    const [fetching, setFetching] = useState(false)
    const [result, setResult] = useState(null)

    const page = useRecoilValue(pageState)
    const {moveToList, moveToRead} = useCustomMove();


    const [queryParams] = useSearchParams()
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10
    const queryStr = createSearchParams({page, size}).toString()

    const handleChangePlayer = (e) => {
        player[e.target.name] = e.target.value
        setPlayer({...player})
    }

    const closeModal = () => {
        setResult(null)
        moveToList({page:1})
    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {fetching? <FetchingModal/> : <></>}

            {/* ResultModal 안됨 */}
            {result? <ResultModal title={'Player Add Result'} content={`${result}번 등록 완료`} callbackFn={closeModal}/> : <></>}

            <ContentHeader page={page} pathName={'/player/'} moveTo={moveToList}/>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">NickName</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="nickName" type={'text'} value={player.nickName} onChange={handleChangePlayer}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">RealName</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="realName" type={'text'} value={player.realName} onChange={handleChangePlayer}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Age</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="age" type={'number'} value={player.age} onChange={handleChangePlayer} min={0}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TeamName</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="teamName" type={'text'} value={player.teamName} onChange={handleChangePlayer}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Position</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="position" type={'text'} value={player.position} onChange={handleChangePlayer}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">BirthDate</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="birthDate" type={'date'} value={player.birthDate} onChange={handleChangePlayer}></input>
                    {/*<DatePicker value={player.birthDate} onChange={handleChangePlayer}/>*/}
                </div>
            </div>
            <div className="flex justify-end">
                <div className="relative md-4 flex p-4 flex-wrap items-stretch">
                    <PlayerButtons page={page} pathName={'/player/'} moveTo={moveToList} pno={player.pno} player={player} moveToRead={moveToRead}/>
                </div>
            </div>
        </div>
    )
}

export default PlayerAddComponent