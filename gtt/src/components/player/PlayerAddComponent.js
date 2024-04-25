import {useRef, useState} from "react";
import {postAdd} from "../../api/playerApi"
import FetchingModal from "../common/FetchingModal"
import ResultModal from "../common/ResultModal"

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
    const uploadRef = useRef()
    const [fetching, setFetching] = useState(false)
    const [result, setResult] = useState(null)
    const handleChangePlayer = (e) => {
        player[e.target.name] = e.target.value
        setPlayer({...player})
    }
    const handleClickAdd = (e) => {
        const formData = new FormData()

        formData.append("nickName", player.nickName)
        formData.append("realName", player.realName)
        formData.append("age", player.age)
        formData.append("teamName", player.teamName)
        formData.append("position", player.position)
        formData.append("birthDate", player.birthDate)

        console.log(formData)

        setFetching(true)

        postAdd(formData).then(data => {
            setFetching(false)
            setResult(data.result)
        })
    }

    const closeModal = () => {
        setResult(null)
    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {fetching? <FetchingModal/> : <></>}

            {/* ResultModal 안됨 */}
            {result? <ResultModal title={'Player Add Result'} content={`${result}번 등록 완료`} callbackFn={closeModal}/> : <></>}

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">NickName</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="nickName" type={'text'} value={player.nickName} onChange={handleChangePlayer}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative md-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">RealName</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="realName" type={'text'} value={player.realName} onChange={handleChangePlayer}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative md-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">AGE</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="age" type={'number'} value={player.age} onChange={handleChangePlayer}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative md-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TeamName</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="teamName" type={'text'} value={player.teamName} onChange={handleChangePlayer}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative md-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Position</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="position" type={'text'} value={player.position} onChange={handleChangePlayer}></input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative md-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">BirthDate</div>
                    <input className="w-4/5 p-6 rounded-r border border-soild border-neutral-300 shadow-md"
                           name="birthDate" type={'date'} value={player.birthDate} onChange={handleChangePlayer}></input>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="relative md-4 flex p-4 flex-wrap items-stretch">
                    <button type="button" className="rounded p-4 w-36 bg-blue-500 text-xl text-white" onClick={handleClickAdd}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default PlayerAddComponent