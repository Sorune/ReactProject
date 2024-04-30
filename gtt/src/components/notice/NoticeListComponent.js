
// 초기값 세팅
import useCustomMove from "../../hooks/useCustomMove";
import {useEffect, useState} from "react";
import {getList} from "../../api/noticeApi";
import PageComponent from "../common/PageComponent";
import {useRecoilState} from "recoil";
import {pageState} from "../../atoms/pageState";
import {useLocation} from "react-router-dom";
import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardHeader,
    Chip,
    IconButton,
    Input,
    Tooltip,
    Typography
} from "@material-tailwind/react";
import {ArrowDownTrayIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {PencilIcon} from "@heroicons/react/24/solid";

const TABLE_HEAD = ["게시번호", "제목", "작성자", "date", ""];

const initState = {
    dtoList:[],
    pageNumList:[],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}

const ListComponent = () => {
    const { moveToList, refresh, moveToRead} = useCustomMove()
    const pathName = useLocation().pathname
    const [page,setPage] = useRecoilState(pageState)
    const [serverData, setServerData] = useState(initState)

    useEffect(() => {
        getList({page:page.page, size:page.size}).then(data =>{
            console.log(data)
            setServerData(data)
        })
    }, [refresh]
    )

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Notice
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            공지사항 게시판입니다.
                        </Typography>
                    </div>
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>
                        <Button className="flex items-center gap-3" size="sm">
                            <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
                        </Button>
                    </div>
                </div>
            </CardHeader>
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2}">
            <div className="flex flex-wrap mx-auto justify-center p-6">
                {serverData.dtoList.map(notice =>
                <div key={notice.notiNo}
                    className="w-full min-w-[400px] p-2 m-2 rounded shadow-md"
                    onClick={() => moveToRead({pathName:'/notice/read', num:notice.notiNo, totalPage:serverData.totalCount})}
                >
                    <div className="flex ">
                        <div className="font-extrabold text-2xl p-2 w-1/12">
                            {notice.notiNo}
                        </div>
                        <div className="text-1xl m-1 p-2 w-8/12 font-extrabold">
                            {notice.title}
                        </div>
                        <div className="text-1xl m-1 p-2 w-2/10 font-medium">
                            {notice.regDate}
                        </div>
                    </div>
                </div>
                )}
            </div>
              <PageComponent serverData={serverData} movePage={moveToList} pathName={pathName}/>
        </div>

            <CardBody className="px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {serverData.dtoList.map(notice  =>
                                <tr key={notice.notiNo} >
                                    <td>
                                        <div className="flex items-center gap-3 p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-bold"
                                            >
                                                {notice.notiNo}
                                            </Typography>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3 p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {notice.title}
                                            </Typography>
                                        </div>
                                    </td>
                                    <td >
                                        <div className="flex items-center gap-3 p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {notice.writer}
                                            </Typography>
                                        </div>
                                    </td>
                                    <td >
                                        <div className="flex items-center gap-3 p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {notice.regDate}
                                            </Typography>
                                        </div>
                                    </td>
                                    <td>
                                        <Tooltip content="수정">
                                            <IconButton variant="text">
                                                <PencilIcon className="h-4 w-4" />
                                            </IconButton>
                                        </Tooltip>
                                    </td>
                                </tr>
                    )}
                    </tbody>
                </table>
                 <div>
                    <PageComponent serverData={serverData} movePage={moveToList} pathName={pathName}/>
                </div>
            </CardBody>

        </Card>
    )
}
export default ListComponent;
