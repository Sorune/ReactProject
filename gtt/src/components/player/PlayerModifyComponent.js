import {useCallback, useEffect, useState} from "react";
import {getOnePlayer, putOnePlayer, deleteOnePlayer} from "../../api/playerApi";
import FetchingModal from "../common/FetchingModal";
import {API_SERVER_HOST} from "../../api/filesApi";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";

const initState = {
    pno:0,
    age : 0,
    nickName : '',
    realName : '',
    teamName : '',
    position : '',
    birthDate : null
}

const host = API_SERVER_HOST

const PlayerModifyComponent = ({pno}) => {
    const [player, setPlayer] = useState(initState)
    const [fetching, setFetching] = useState(false)
    const [result, setResult] = useState(null)

    const navigate = useNavigate()
    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10
    const queryStr = createSearchParams({page, size}).toString()

    const moveToRead = useCallback(() => {
        navigate({pathname:`/player/read/${pno}`, search:queryStr})
    },[page, size])
    const moveToList = useCallback(() => {
        navigate({pathname:'/player/list', search:queryStr})
    },[page, size])

    useEffect(() => {
        setFetching(true)

        getOnePlayer(pno).then(data => {
            setPlayer(data)
            setFetching(false)
        })
    }, [pno])

    const handleChangePlayer = (e) => {
        player[e.target.name] = e.target.value
        setPlayer({...player})
    }

    const handleClickModify = () => {
        const formData = new FormData()

        formData.append("nickName", player.nickName)
        formData.append("realName", player.realName)
        formData.append("age", player.age)
        formData.append("teamName", player.teamName)
        formData.append("position", player.position)
        formData.append("birthDate", player.birthDate)

        setFetching(true)

        putOnePlayer(pno, formData).then(data => {
            setResult('Modified')
            setFetching(false)
        })
    }

    const handleClickDelete = () => {
        setFetching(true)

        deleteOnePlayer(pno).then(data => {
            setResult("Deleted")
            setFetching(false)
        })
    }

    const closeModal = () => {
        if (result === 'Modified') {
            moveToRead(pno)
        } else if (result === 'Deleted') {
            moveToList()
        }

        setResult(null)
    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {fetching ? <FetchingModal/> : <></>}

            {result ? <ResultModal title={`${result}`} content={'정상적으로 처리되었습니다.'} callbackFn={closeModal()}/> : <></> }

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">PNO</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                        name="pno" type={'text'} value={player.pno} readOnly
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">NickName</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                        name="nickName" type={'text'} value={player.nickName} onChange={handleChangePlayer}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">RealName</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                        name="realName" type={'text'} value={player.realName} onChange={handleChangePlayer}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">AGE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                        name="age" type={'number'} value={player.age} onChange={handleChangePlayer}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TeamName</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                        name="teamName" type={'text'} value={player.teamName} onChange={handleChangePlayer}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Position</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                        name="position" type={'text'} value={player.position} onChange={handleChangePlayer}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">BirthDate</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                        name="birthDate" type={'date'} value={player.birthDate} onChange={handleChangePlayer}
                    />
                </div>
            </div>

            <div className="flex justify-end p-4">
                <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500" onClick={handleClickDelete}>Delete</button>
                <button type="button" className="inline-block rounded p-4 m-2 text-xl w-32 text-white bg-orange-500" onClick={handleClickModify}>Modify</button>
                <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500" onClick={moveToList}>List</button>
            </div>
        </div>
    )
}

export default PlayerModifyComponent
