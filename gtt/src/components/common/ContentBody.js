import {Avatar, Card, Chip, Typography} from "@material-tailwind/react";

const ContentBody = ()=>{
    return (
        <Card className="p-2">
            <div className="grid col-auto gap-5">
                <div className="col-start-1 col-end-2">
                    <div className="flex justify-start items-center">
                            <Avatar src="/img/geng.png" alt="avatar"/>
                            <div className="ml-5">
                                <Typography variant="h6">GEN.G</Typography>
                            </div>
                        </div>
                    </div>
                <div className="col-start-2 col-end-6 flex items-center">
                    <Typography variant="h6">
                        기사제목
                    </Typography>
                </div>
            </div>
            <div className="flex flex-box">
                본문내용 &nbsp;
            </div>
            <Typography as="div" className="row-end-6 w-full h-48">
                df
            </Typography>
        </Card>
    )
}

export default ContentBody;