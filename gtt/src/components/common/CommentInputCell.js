import {Button, Card, IconButton, Textarea} from "@material-tailwind/react";
import {useEffect, useRef, useState} from "react";
import {insertComment} from "../../api/commentApi";
import {useLocation} from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";

const CommentInputCell = ({refresh, setRefresh})=>{
    const commnetInput = useRef()
    const writerInput = useRef()
    const [comment,setComment] = useState()
    const writer = "user"
    const newsNo = useLocation().pathname.split("/")[3]

    const handleOnChange = (e)=>{
        console.log(e.target.value)
        setComment(e.target.value)
    }
    const handleSave = ()=>{
        console.log("save")
        insertComment(writer,comment,newsNo).then(message=>{
            alert(message.comNo)
            setComment("")
            commnetInput.current.children[0].value = ""
            setRefresh(!refresh)
        }).catch(err => console.log(err))
    }
    const handleReset = () =>{
        console.log("reset target : "+ commnetInput.current.children[0])
        commnetInput.current.children[0].value = ""
    }
    return(
        <Card>
            <div className="relative flex justify-center">
                <div className="w-[95%]">
                    <input ref={writerInput} type="hidden" name={"writer"} value={writer} />
                    <Textarea ref={commnetInput} variant="static" placeholder="Your Comment" rows={8} onChange={handleOnChange}/>
                    <div className="flex w-full justify-between py-1.5">
                        <div></div>
                        <div className="flex gap-2">
                            <Button size="sm" color="red" variant="text" className="rounded-md" onClick={handleReset}>
                                Cancel
                            </Button>
                            <Button size="sm" className="rounded-md" onClick={handleSave}>
                                Post Comment
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default CommentInputCell