import {Avatar, Button, Card, Chip, Typography} from "@material-tailwind/react";


const CommentCell = ()=>{
    return (
        <Card className="p-2">
            <div className="flex flex-box justify-between">
                <div>
                    <Chip icon={
                        <Avatar
                            size="xs"
                            variant="circular"
                            className="h-full w-full -translate-x-0.5"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                    }
                          value={<Typography variant="small">Writer</Typography>}
                    />
                    <Typography variant="h5">
                        test Comment
                    </Typography>
                </div>
                <div>
                    <div className="gap-2">
                        <Button className="w-full">modify</Button>
                    </div>
                    <div className="gap-2">
                        <Button className="w-full">delete</Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default CommentCell