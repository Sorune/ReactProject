import {useCallback, useEffect, useState} from "react";
import {getOnePlayer} from "../../api/playerApi";
import useCustomMove from "../../hooks/useCustomMove";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";

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

    const navigate = useNavigate()
    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10
    const queryStr = createSearchParams({page, size}).toString()

    const moveToModify = useCallback(() => {
        navigate({pathname:`/player/modify/${pno}`, search:queryStr})
    },[page, size])
    const moveToList = useCallback(() => {
        navigate({pathname:'/player/list', search:queryStr})
    },[page, size])


    useEffect(() => {
        getOnePlayer(pno).then(data => {
            console.log(data)
            setPlayer(data)
        })
    }, [pno])

    return (
        <div className= "border-2 border-sky-200 mt-100 m-2 p-4">
            {makeDiv('Pno', player.pno)}
            {makeDiv('Age', player.age)}
            {makeDiv('NickName', player.nickName)}
            {makeDiv('RealName', player.realName)}
            {makeDiv('TeamName', player.teamName)}
            {makeDiv('Position', player.position)}
            {makeDiv('BirthDate', player.birthDate)}

            <div className="flex justify-end p-4">
                <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500" onClick={() => moveToModify()}>
                    Modify
                </button>
                <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500" onClick={() => moveToList()}>
                    List
                </button>
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
