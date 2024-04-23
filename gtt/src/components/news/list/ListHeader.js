import {Avatar, Button, CardHeader, Tab, Tabs, TabsHeader, Typography} from "@material-tailwind/react";
import {UserPlusIcon} from "@heroicons/react/24/solid";
import DatePicker from "../../common/DatePicker";

const img = "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"

const ListHeader = ({TABS})=>{
    return(
        <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        News list
                    </Typography>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <Button variant="outlined" size="sm">
                        view all
                    </Button>
                    <Button className="flex items-center gap-3" size="sm">
                        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Nesw
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <Tabs value="all" className="w-full md:w-max">
                    <TabsHeader>
                        {TABS.map(({label, value}) => (
                            <Tab key={value} value={value}>
                                &nbsp;&nbsp;<Avatar src={img} alt="{dto.theTeam}" size="sm"/>&nbsp;&nbsp;
                            </Tab>
                        ))}
                    </TabsHeader>
                </Tabs>
                <div className="flex flex-cols-2">
                    <DatePicker name="regDate"/>
                    <DatePicker name="modDate"/>
                </div>
            </div>
        </CardHeader>
    )
}

export default ListHeader;