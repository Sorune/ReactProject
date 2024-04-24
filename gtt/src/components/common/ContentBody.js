import {Avatar, Card, Chip, Typography} from "@material-tailwind/react";
import QuilEditorReadOnly from "./quill/QuillEditorReadOnly";
import React from "react";

const ContentBody = ({ref:ReadQuillRef,title:title,content:content,teamImg:teamImg,teamName:teamName})=>{
    return (
        <Card className="p-2">
            <div className="grid col-auto gap-5">
                <div className="col-start-1 col-end-2">
                    <div className="flex justify-start items-center">
                            <Avatar src={teamImg} alt="avatar"/>
                            <div className="ml-5">
                                <Typography variant="h6" className="flex">{teamName}</Typography>
                            </div>
                        </div>
                    </div>
                <div className="col-start-2 col-end-6 flex items-center">
                    <Typography variant="h6">
                        {title}
                    </Typography>
                </div>
            </div>
            <QuilEditorReadOnly ref={ReadQuillRef} value={content}/>
        </Card>
    )
}

export default ContentBody;
