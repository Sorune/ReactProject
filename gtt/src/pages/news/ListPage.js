import {useEffect,useState} from "react";
import {MagnifyingGlassIcon,ChevronUpDownIcon} from "@heroicons/react/24/outline";
import {UserPlusIcon} from "@heroicons/react/24/solid";
import {Card,CardHeader,Input,Typography,Button,CardBody,Chip,CardFooter,Tabs,TabsHeader,Tab,Avatar,IconButton,Tooltip} from "@material-tailwind/react";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../../components/common/PageComponent";
import DatePicker from "../../components/common/DatePicker";
import ListComponent from "../../components/news/NewsComponent";
import {getList} from "../../api/newsApi";
const initState = {
    dtoList:[],
    pageNumList:[],
    pageRequestDTO: null,
    prev:false,
    next:false,
    totalCount:0,
    prevPage:0,
    nextPage:0,
    totalPage:0,
    current:0
}
const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];
const TABLE_HEAD = ["Teams", "Title", "Writer", "hits", "Recommend", "RegDate"];

const ListPage = ()=>{
    const {page, size, refresh,moveToList,moveToRead} = useCustomMove()
    const [serverData, setServerData] = useState(initState)

    useEffect(() => {
        getList({page,size}).then(data=>{
            setServerData(data)
        })
    }, [page, size, refresh]);

    return(
        <Card className="h-full w-full">
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
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                </Tab>
                            ))}
                        </TabsHeader>
                        <div>
                            <DatePicker name="regDate"/>
                        </div>
                    </Tabs>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {TABLE_HEAD.map((head, index) => (
                            <th
                                key={head}
                                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                >
                                    {head}{" "}
                                    {index !== TABLE_HEAD.length - 1 && (
                                        <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                    )}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <ListComponent serverData={serverData}/>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <div className="w-full md:w-72">
                    <Input
                        label="Search"
                        icon={<MagnifyingGlassIcon className="h-5 w-5"/>}
                    />
                </div>
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {serverData.current} of {Math.ceil(serverData.totalCount/10)}
                </Typography>
                <div className="flex gap-2">
                    <PageComponent serverData={serverData} movePage={moveToList}/>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ListPage;