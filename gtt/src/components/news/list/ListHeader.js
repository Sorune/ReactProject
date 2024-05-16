import {Avatar, Button, CardHeader, Tab, Tabs, TabsHeader, Typography} from "@material-tailwind/react";
import {UserPlusIcon} from "@heroicons/react/24/solid";
import DatePicker from "../../common/DatePicker";
import {useNavigate} from "react-router-dom";

const img = "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"

const ListHeader = ({TABS,moveTo,pathName})=>{
    // 페이지 이름 추출 및 첫 글자 대문자로 변환
    let pageName = pathName.split('/')[1].charAt(0).toUpperCase() + pathName.split('/')[1].slice(1);

    // 페이지 이름이 "free"인 경우 "Board" 추가
    if (pageName === "Free") {
        pageName += "Board";
    }


    return(
        <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        {pageName} list
                    </Typography>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <Button variant="outlined" size="sm">
                        view all
                    </Button>
                    <Button className="flex items-center gap-3" size="sm" onClick={()=>{moveTo({pathName:pathName})}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        Add {pageName}
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
