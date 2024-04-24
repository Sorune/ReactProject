import {Avatar, Card, Chip, Input, Typography} from "@material-tailwind/react";
import React from "react";
import QuilEditor from "./quill/QuilEditor";

const ContentInputBody = React.forwardRef(({ref,title,content,teamImg,teamName,date,viewCount,writer})=>{


    return (

        <Card className="p-2 m-2 min-h-[10rem]">
            <div className="grid grid-cols-auto gap-4 grid-rows-auto flex items-stretch flex items-center flex flex-box mt-2 mb-2 ml-2 ">
                <div className="col-start-1 col-end-2 p-1">
                    <Chip icon={
                        <Avatar
                            size="xs"
                            variant="circular"
                            className="h-full w-full -translate-x-0.5 "
                            src={teamImg} />
                    }
                          value={<Typography variant="small">{teamName}</Typography>}

                    />
                </div>
                <div className="col-start-2 col-end-5 self-center p-1">
                    <Input name={"title"} value={title?title:""}/>
                </div>
            </div>
            <hr/>
            <div className="p-3">
                <QuilEditor ref={ref} value={content?content:""} />
            </div>
        </Card>
    )
})

export default ContentInputBody;
