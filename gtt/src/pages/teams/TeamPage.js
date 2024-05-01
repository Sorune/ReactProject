import SidebarLayout from "../../layouts/SidebarLayout";
import {Button, Card, CardFooter, IconButton, Input, Tooltip, Typography} from "@material-tailwind/react";
import {useState} from "react";
import {PencilIcon, TrashIcon,ArrowPathIcon, CheckIcon, PlusIcon} from "@heroicons/react/24/solid";
import DropFiles from "../../components/common/DropFiles";

const TABLE_HEAD = ["Team Logo", "Team Name", ""];

const TeamPage = ()=>{
    const [modify, setModify] = useState(false)
    const [add, setAdd] = useState(false)
    const handleModify = ()=>{
        setModify(!modify)
        console.log(modify)
    }
    const handleAdd = ()=>{
        setAdd(!add)
        console.log(add)
    }
    return (
        <SidebarLayout>
            <div>
                <Card>
                    <table >
                        <thead className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <tr>
                                <td>
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Team Logo
                                    </Typography>
                                </td>
                                <td>
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Team Logo
                                    </Typography>
                                </td>
                                <td>
                                </td>
                            </tr>
                    </thead>
                        <tbody>
                        {modify ? <tr className={"grid grid-cols-12"}>
                                <td className={"col-start-1 col-end-3"}><Input></Input></td>
                                <td className={"col-start-3 col-end-10"}><Input value={"Gen.G"}></Input></td>
                                <td className={"col-start-10 col-end-12"}>
                                    <Tooltip content="Edit Team">
                                        <IconButton variant="text" onClick={handleModify}>
                                            <PencilIcon className="h-4 w-4" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip content="Remove Team">
                                        <IconButton variant="text">
                                            <TrashIcon className="h-4 w-4" />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr> :
                            <tr>
                                <td className={"col-start-1 col-end-3"}>
                                    <img src={"/img/team/geng.png"} className={"w-24"}/>
                                </td>
                                <td className={"col-start-3 col-end-10"}>
                                    <Typography>Gen.G</Typography>
                                </td>
                                <td className={"col-start-10 col-end-12"}>
                                    <Tooltip content="Edit Team">
                                        <IconButton variant="text" onClick={handleModify}>
                                            <PencilIcon className="h-4 w-4" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip content="Remove Team">
                                        <IconButton variant="text">
                                            <TrashIcon className="h-4 w-4" />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>}
                        {add ? <tr>
                            <td className={"w-24 h-24"}><DropFiles></DropFiles></td>
                            <td className={"col-start-3 col-end-10"}><Input></Input></td>
                            <td className={"col-start-10 col-end-12"}>
                                <IconButton variant="text">
                                    <ArrowPathIcon  className="h-4 w-4"/>
                                </IconButton>
                                <IconButton variant="text">
                                    <CheckIcon  className="h-4 w-4"/>
                                </IconButton>
                            </td>
                        </tr> : <></>}
                        </tbody>
                    </table>
                    <CardFooter className="flex items-end justify-between border-t border-blue-gray-50 p-4">
                        <IconButton variant="text" onClick={handleAdd}>
                            <PlusIcon  className="h-4 w-4"/>
                        </IconButton>
                        <Button>prev</Button>
                    </CardFooter>
                </Card>
            </div>
        </SidebarLayout>
    )
}

export default TeamPage;