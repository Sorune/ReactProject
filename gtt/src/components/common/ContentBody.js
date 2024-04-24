import {Avatar, Card, Chip, Typography} from "@material-tailwind/react";
import QuilEditorReadOnly from "./quill/QuillEditorReadOnly";
import React from "react";

const ContentBody = ({ref,title,content,teamImg,teamName,date,viewCount})=>{
    return (
        <Card className="p-2 m-2">
            <div className="grid grid-cols-9 gap-2 flex items-stretch flex flex-box mt-2 mb-2 ml-2">
                <div className="col-start-1 col-end-3 p-1">
                    <Chip icon={
                        <Avatar
                            size="xs"
                            variant="circular"
                            className="h-full w-full -translate-x-0.5"
                            src={teamImg} />
                    }
                          value={<Typography variant="small">{teamName}</Typography>}
                    />
                </div>
                <div className="col-start-3 col-end-7 self-center p-1">
                    {title}
                </div>
                <div className="col-start-7 self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         className="w-5 h-5">
                        <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                        <path fill-rule="evenodd"
                              d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                              clip-rule="evenodd"/>
                    </svg>
                    &nbsp;&nbsp;{viewCount}
                </div>
                <div className="col-start-8 self-center p-1">
                    <small>date : {date}</small>
                </div>
            </div>
            <hr/>
            <QuilEditorReadOnly ref={ref} value={content}/>
        </Card>
    )
}

export default ContentBody;
