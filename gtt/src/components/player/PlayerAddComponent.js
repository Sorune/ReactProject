import React, {useCallback, useRef, useState} from "react";
import FetchingModal from "../common/FetchingModal"
import ResultModal from "../common/ResultModal"
import useCustomMove from "../../hooks/useCustomMove";
import {createSearchParams, useLocation, useSearchParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {pageState} from "../../atoms/pageState";
import ContentHeader from "../common/ContentHeader";
import DropFiles from "../../components/common/DropFiles";
import PlayerButtons from "./list/PlayerButtons";
import {Button, Card, Input} from "@material-tailwind/react";
import {DropDownInput} from "../common/DropDownInput";
import QuilEditor from "../common/quill/QuilEditor";
import DatePicker from "../common/DatePicker";
import {DialogResult} from "../common/DialogResult";

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
    const imageDiv = useRef();

    const page = useRecoilValue(pageState)
    const {moveToList, moveToRead} = useCustomMove();

    const path = useLocation().pathname.split("/")[2];
    const buttonRef = useRef()
    const inputRef = useRef()
    const [selectedTeam, setSelectedTeam] = useState('');

    const [queryParams] = useSearchParams()
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10
    const queryStr = createSearchParams({page, size}).toString()

    const handleChangePlayer = (e) => {
        player[e.target.name] = e.target.value
        setPlayer({...player})
        console.log(player.playerImage)
        // setPlayer(prev => ({ ...prev, playerImage: e.target.value }));
    }

    const closeModal = () => {
        setResult(null)
        moveToList({page:1})
    }

    const handleDropDownChange = (e) => {
        if(buttonRef.current){
            const buttonInstance = buttonRef.current
            setSelectedTeam(buttonInstance.innerText)
            console.log(selectedTeam)
        }
        console.log(e.target.value)
    };
    const handleResult = (data) => {
        setResult(data);
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const closeDialog = () =>{
        setResult(null)
    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {fetching ? <FetchingModal/> : <></>}

            {/* ResultModal 안됨 */}
            {result ?
                <ResultModal title={'Player Add Result'} content={`${result}번 등록 완료`} callbackFn={closeModal}/> : <></>}

            <ContentHeader page={page} pathName={'/player/'} moveTo={moveToList}/>

             <Card className="p-2 m-2 min-h-[10rem]">
                <form>
                    <div className="grid grid-cols-auto gap-4 grid-rows-auto flex items-stretch flex items-center flex flex-box mt-2 mb-2 ml-2 ">
                        <div className="col-start-1 col-end-3 p-1">
                            <DropDownInput name="nickName" placeholder="NickName" buttonRef={buttonRef} inputRef={inputRef} onChange={handleDropDownChange} onClick={handleChangePlayer} defaultValue={player.nickName}/>
                        </div>
                        <div className="col-start-3 p-1">
                            <div className="w-full">
                                <Input label="이름" placeholder="RealName" name="realName" defaultValue={player.realName} type="text" onClick={handleChangePlayer} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-3 w-100">
                        <Input label="나이" name="age" type={'number'} value={player.age} onChange={handleChangePlayer} min={0}></Input>
                        <div className="ml-4">
                            <Input label="출생일" name="birthDate" type={'date'} value={player.birthDate} onChange={handleChangePlayer}></Input>
                        </div>
                        <div className="ml-4">
                            <Input label="포지션" name="position" value={player.position} onChange={handleChangePlayer}/>
                        </div>
                    </div>



                    <div className="p-3 justify-self-end flex justify-center">
                  {/*      {path==="write"?<Button onClick={handleSave}>Save</Button>:
                            <Button onClick={handleModify}>Modify</Button>
                        }*/}
                    </div>
                </form>
            </Card>

     {/*<div className="flex justify-center">
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
                           name="birthDate" type={'date'} value={player.birthDate}
                           onChange={handleChangePlayer}></input>
                    {/*<DatePicker value={player.birthDate} onChange={handleChangePlayer}/>
                </div>
            </div>*/}
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">PlayerImage</div>
                    <td>
                        <DropFiles value={player.playerImage} name="playerImage" imageDiv={imageDiv}/>
                    </td>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="relative md-4 flex p-4 flex-wrap items-stretch">
                    <PlayerButtons page={page} pathName={'/player/'} moveTo={moveToList} pno={player.pno}
                                   player={player} moveToRead={moveToRead} imageDiv={imageDiv}/>
                </div>
            </div>
        </div>
    )
}

export default PlayerAddComponent