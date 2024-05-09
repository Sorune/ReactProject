import React from "react";
import {Button,Typography} from "@material-tailwind/react";
import {useEffect, useRef, useState} from "react";

const sitList = {
    A: [6, 6, 6, 6, 6, 6, 6, 6],
    B:[6,6,6,6,6,6,6,6],
    C1:[6,7,8,8,9,10,11,12],
    C2:[5,6,7,7,8,9],
    C3:[5,7,8,8,9,10,11,12],
}

const Stadium=()=>{
    const nameHolder = useRef()
    const resultList = useRef()
    const selectArea = useRef()
    const [section, setSection] = useState("")

    const handleSelect = (e)=>{
        if(e.target.classList.contains("bg-gray-500")){
            e.target.classList.remove("bg-gray-500")
            nameHolder.current.innerText = ""
            setSection("")
            const sits = selectArea.current.children;
            [...Array(sits.length)].map((sit,index)=>selectArea.current.removeChild(document.getElementById(index)))
        }else{
            e.target.classList.add("bg-gray-500")
            nameHolder.current.innerText = e.target.children[0].innerText
            setSection(e.target.children[0].innerText)
        }
    }

    useEffect(() => {

    }, [section]);

    return(
        <div className="w-[200vh] h-[100vh]">
            <div className="grid grid-cols-12 w-full h-full">
                <div className="col-start-1 col-span-7 grid grid-rows-2 ">
                    <div className="row-start-1 p-4 grid grid-cols-3">
                        <div className="border h-full col-start-1 flex items-center justify-center" onClick={handleSelect}>
                            <p>A</p>
                        </div>
                        <div className="border h-full col-start-3 flex items-center justify-center" onClick={handleSelect}>
                            <p>B</p>
                        </div>
                    </div>
                    <div className="row-start-2 p-4 border grid grid-cols-3">
                        <div className="border p-4 gap-2 h-full flex items-center justify-center"
                             onClick={handleSelect}>
                            <p>C1</p>
                        </div>
                        <div className="border p-4 h-full flex items-center justify-center"
                             onClick={handleSelect}>
                            <p>C2</p>
                        </div>
                        <div className="border p-4 h-full flex items-center justify-center"
                             onClick={handleSelect}>
                            <p>C3</p>
                        </div>
                    </div>
                </div>
                <div className="col-end-12 col-span-4 grid grid-rows-2">
                    <div className="border h-full p-4">
                        <Typography ref={nameHolder} className="text-center"></Typography>
                        <div className="p-2" id="selectArea" ref={selectArea}>
                            {nameHolder.current&&nameHolder.current.innerText!==undefined&&nameHolder.current.innerText!==""?sitList[nameHolder.current.innerText].map((num,index)=>{
                                const area = selectArea.current;
                                const div = document.createElement("div")
                                div.id = index;
                                [...Array(num)].map((n,i)=>{
                                    const element = document.createElement("input")
                                    element.innerText = index+"-"+(i+1)
                                    element.type = "checkbox"
                                    div.appendChild(element)
                                })
                                area.appendChild(div)
                            }) :<></>}
                        </div>
                    </div>
                    <div className="border h-full p-4 grid grid-rows-4">
                        <div className="row-start-1 row-span-3">
                            <ul className="p-2 h-full" ref={resultList}></ul>
                        </div>
                        <div className="row-start-4 flex justify-between">
                            <Button>reset</Button>
                            <Button>Add Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stadium