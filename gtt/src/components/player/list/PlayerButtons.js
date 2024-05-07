import {Breadcrumbs, Button} from "@material-tailwind/react";
import {Link, useLocation} from "react-router-dom";
import React from "react";
import {deleteOnePlayer, postAdd, putOnePlayer} from "../../../api/playerApi";


const PlayerButtons = ({moveTo,pathName,page, moveToModify, moveToRead, serverData, pno, player, imageDiv})=>{
    const path = useLocation().pathname.split("/")[2];
    const pathNum = useLocation().pathname.split("/")[3];


    const handleClickDelete = () => {

        deleteOnePlayer(pno).then(data => {
            moveTo({
                pathName:pathName+'list',
                pageParam: {page: `${page.page}`, size: `${page.size}`}
            })
        })
    }

    const handleClickModify = () => {
        const formData = new FormData()

        formData.append("nickName", player.nickName)
        formData.append("realName", player.realName)
        formData.append("age", player.age)
        formData.append("teamName", player.teamName)
        formData.append("position", player.position)
        formData.append("birthDate", player.birthDate)
        formData.append("playerImage", player.playerImage)

        putOnePlayer(pno, formData).then(data => {
            moveTo({
                pathName:pathName+'read/'+player.pno,
                pageParam: {page: `${page.page}`, size: `${page.size}`}
            })
        })
    }

    const handleClickAdd = (e) => {
        const fileName = Array.from(imageDiv.current.children)[0].getAttribute("fileName");
        console.log("file", fileName);

        const formData = new FormData()

        formData.append("nickName", player.nickName)
        formData.append("realName", player.realName)
        formData.append("age", player.age)
        formData.append("teamName", player.teamName)
        formData.append("position", player.position)
        formData.append("birthDate", player.birthDate)
        formData.append("playerImage", fileName)

        console.log(formData)

        postAdd(formData).then(data => {
            console.log(data, data.pno)

            moveTo({
                pathName:pathName+'read/' + data.pno,
                pageParam: {page: `${page.page}`, size: `${page.size}`}
            })
        })
    }

    return (
        <div className="flex flex-box justify-center items-center">
            <div className="flex p-2">
                {path === "read" || path === "modify" ?
                    <Button className="rounded-full" onClick={() => moveTo({
                        pathName: pathName + 'list',
                        pageParam: { page: `${page.page}`, size: `${page.size}` }
                    })}>List</Button> : <></>}

                {path==="read"?
                    <Button className="rounded-full"
                         onClick={() => moveToModify({pathName: pathName+"modify", num: pno})}>Modify</Button>:<></>}

                {path==="modify"?
                    <div className="justify-between">
                        <Button className="rounded-full" onClick={handleClickDelete}>Delete</Button><Button className="rounded-full" onClick={handleClickModify}>Modify</Button>
                    </div>:<></>}

                {path==="list"?
                    <Button className="rounded-full" onClick={() => moveTo({
                        pathName:pathName + "read/" + pno
                    })}>Read</Button> : <></> }

                {path==="add" ?
                    <Button className="rounded-full" onClick={handleClickAdd}>Add</Button> : <></> }
            </div>
        </div>
    )
}
export default PlayerButtons
