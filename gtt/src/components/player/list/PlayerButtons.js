import {Breadcrumbs, Button} from "@material-tailwind/react";
import {Link, useLocation} from "react-router-dom";
import React, {useState} from "react";
import {deleteOnePlayer, postAdd, putOnePlayer} from "../../../api/playerApi";


const PlayerButtons = ({moveTo,pathName,page, moveToModify, moveToRead, serverData, pno, player, imageDiv, setResultCallback})=>{
    const path = useLocation().pathname.split("/")[2];
    const pathNum = useLocation().pathname.split("/")[3];
    const [result, setResult] = useState(null)


    const handleClickDelete = () => {

        deleteOnePlayer(pno).then(data => {
            moveTo({
                pathName:pathName+'list',
                pageParam: {page: `${page.page}`, size: `${page.size}`}
            })
        })
    }

    const handleClickModify = () => {
        const children = imageDiv.current.children;
        let fileName = null;

        if (children && children.length > 0) { // 이미지 파일이 존재한는지 여부
            const firstChild = children[0];
            fileName = firstChild.getAttribute("fileName");
        } else { // 없을 시
            console.error("imageDiv에 자식 요소가 없습니다.");
        }

        // const fileName = Array.from(imageDiv.current.children)[0].getAttribute("fileName");
        // console.log("file", fileName);

        const formData = new FormData()

        if (player.nickName !== "" && player.realName !== "" && player.age !== "" && player.teamName !== ""
            && player.position !== "" && player.birthDate !== "" && fileName !== "") { // input 요소에 값이 전부 있을 경우

            formData.append("nickName", player.nickName)
            formData.append("realName", player.realName)
            formData.append("age", player.age)
            formData.append("teamName", player.teamName)
            formData.append("position", player.position)
            formData.append("birthDate", player.birthDate)
            formData.append("playerImage", player.playerImage)

            console.log(formData)

            putOnePlayer(pno, formData).then(data => {
                moveTo({
                    pathName:pathName+'read/'+player.pno,
                    pageParam: {page: `${page.page}`, size: `${page.size}`}
                })
            })
        } else { // input 요소에 값이 하나라도 없는 경우
            alert("올바른 값을 입력해주세요.");

            return;
        }
    }

    const handleClickAdd = (e) => {
        const children = imageDiv.current.children;

        let fileName = null;

        if (children && children.length > 0) { // 이미지 파일이 존재하는지 여부

            const firstChild = children[0];
            fileName = firstChild.getAttribute("fileName");
        } else { // 없을 시
            console.error("imageDiv에 자식 요소가 없습니다.");
        }

        console.log(player.nickName)
        console.log(player.realName)
        console.log(player.age)
        console.log(player.teamName)
        console.log(player.position)
        console.log(player.birthDate)
        console.log(fileName)

        // const fileName = Array.from(imageDiv.current.children)[0].getAttribute("fileName");
        // console.log("file", fileName);

        const formData = new FormData()

        if (player.nickName !== "" && player.realName !== "" && player.age !== 0
            && player.teamName !== ""
            && player.position !== "" && player.birthDate !== "" && fileName !== "") { // input 요소에 값이 전부 있을 경우

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
                //setResultCallback(data.pno)
                moveTo({
                    pathName:pathName+'read/' + data.pno,
                    pageParam: {page: `${page.page}`, size: `${page.size}`}
                })
            })
        } else { // input 요소에 값이 하나라도 없는 경우
            alert("올바른 값을 입력해주세요.");

            return;
        }
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
