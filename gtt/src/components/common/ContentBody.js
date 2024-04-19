import {Avatar, Card, Chip, Typography} from "@material-tailwind/react";


const ContentBody = ()=>{
    return (
        <Card className="p-2">
            <div className="grid gap-2 grid-cols-6 flex flex-col justify-between">
                <Chip icon={
                    <Avatar
                        size="xs"
                        variant="circular"
                        className="h-full w-full -translate-x-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"/>
                }
                      value={<Typography variant="small">Team Name</Typography>}
                />
                <div className="flex-box">
                    Title
                </div>
            </div>
            <div className="flex flex-box">
                ReadNews &nbsp;
            </div>
            <Typography as="div" className="row-end-6 w-full h-48">
                content....
            </Typography>
        </Card>
    )
}

export default ContentBody;