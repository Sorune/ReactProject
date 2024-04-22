import {Avatar, Button, Card, Chip, Typography} from "@material-tailwind/react";


const CommentCell = ({key,writer, position, content})=>{
    return (
        <Card key={key} className="p-2 m-2">
            <div className="grid col-auto gap-5">
                <div className="col-start-1 col-end-2">
                    <div className="flex items-center gap-2">
                        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                        <div>
                            <Typography variant="h6">{writer}</Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                {position}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="col-start-3 col-end-4 flex items-center">
                    <Typography color="black" variant="h6">
                        {content}
                    </Typography>
                </div>
                <div className="col-start-5 col-end-6 flex justify-end">
                    {/* 본인이 아닐경우 보이는 추천버튼 */}
                    <Button size="sm" color="green" variant="text" className="rounded-md">
                        like
                    </Button>
                    {/* 본인일 경우 보이는 수정, 삭제 버튼 */}
                    <Button size="sm" color="blue" variant="text" className="rounded-md">
                        modify
                    </Button>
                    <Button size="sm" color="red" variant="text" className="rounded-md">
                        delete
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default CommentCell