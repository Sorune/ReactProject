import {Avatar, Button, CardHeader, Tab, Tabs, TabsHeader, Typography} from "@material-tailwind/react";
import {UserPlusIcon} from "@heroicons/react/24/solid";
import {useLocation, useNavigate} from "react-router-dom";
import React from "react";

const img = "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"


const PlayerListHeader = ({TABS,moveTo,pathName, page})=>{
    const path = useLocation().pathname.split("/")[2];

    return(
        <div>
            {path === 'list' ?
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Player list
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <Button variant="outlined" size="sm">
                                view all
                            </Button>
                            <Button className="flex items-center gap-3" size="sm" onClick={()=>{moveTo({pathName:pathName})}}>
                                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Player
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader>
                                {TABS.map(({label, value}) => (
                                    <Tab key={value} value={value}>
                                        &nbsp;&nbsp;<Avatar src={img} alt="{player.teamName}" size="sm"/>&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                    </div>
                    <br/>
                </CardHeader>
                : <></>
            }

        </div>
    )
}

export default PlayerListHeader;
