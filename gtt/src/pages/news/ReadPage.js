import {createSearchParams, Link, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {
    Avatar,
    Breadcrumbs,
    Button,
    Card,
    CardBody,
    CardFooter,
    Chip,
    Textarea,
    Typography
} from "@material-tailwind/react";
import PageComponent from "../../components/common/PageComponent";
import {getComList} from "../../api/commentApi";
import useCustomMove from "../../hooks/useCustomMove";
import {useEffect, useState} from "react";
import CommentCell from "../../components/common/CommentCell";
import CommentInputCell from "../../components/common/CommentInputCell";

import ContentBody from "../../components/common/ContentBody";

const initState = {
    dtoList: [],
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}

const ReadPage = () => {
    const {page, size, moveToList, moveToRead, loadToList, getNum} = useCustomMove()
    const [queryParams] = useSearchParams();
    const [refresh, setRefresh] = useState(false);
    const [comServerData, setComServerData] = useState(initState)
    const newsNo = useLocation().pathname.split("/")[3]
    const [isFirst, setIsFirst] = useState(false)
    const pathName = `${newsNo + "?" + queryParams}`
    const navigate = useNavigate()

    useEffect(() => {
        let pathName = isFirst === true ? `${newsNo + "?" + createSearchParams({
            page: queryParams.get('page'),
            size: queryParams.get('size')
        }).toString()}` : `${newsNo}?page=1&size=10`;
        setIsFirst(true);
        getComList({pathName}).then(data => {
            setComServerData(data)
        })
    }, [queryParams]);

    return (
        <section className="bg-white w-full h-full p-2 py-2">
            <div className="flex flex-box justify-between items-center">
                <Breadcrumbs fullWidth className="bg-white -z-10">
                    <Link to={'/'} className="opacity-60">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                        </svg>
                    </Link>
                    <Link to={'/news'} className="opacity-60">
                        <span>Components</span>
                    </Link>
                    <a href="#">Breadcrumbs</a>
                </Breadcrumbs>
                <div className="flex p-2">
                    <Button className="rounded-full" onClick={() => navigate(`/news/list?page=${page}&size=${size}`)}>List</Button>
                    <Button className="rounded-full">Modify</Button>
                </div>
            </div>
            <Card className="flex flex-auto p-1">
                <CardBody>
                    <Card className="p-2 m-2">
                        <div className="grid grid-cols-9 gap-2 flex items-stretch flex flex-box mt-2 mb-2 ml-2">
                            <div className="col-start-1 col-end-3 p-1">
                                    <Chip icon={
                                        <Avatar
                                            size="xs"
                                            variant="circular"
                                            className="h-full w-full -translate-x-0.5"
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                                    }
                                          value={<Typography variant="small">Team Name</Typography>}
                                    />
                            </div>
                            <div className="col-start-3 col-end-7 self-center p-1">
                                ReadNews {newsNo}&nbsp;
                            </div>
                            <div className="col-start-7 self-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="w-5 h-5">
                                    <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                    <path fill-rule="evenodd"
                                          d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div className="col-start-8 self-center p-1">
                                <small>date</small>
                            </div>
                        </div>
                        <hr/>
                        <Typography as="div" className="row-end-6 w-full h-48  p-2">
                            content....
                        </Typography>
                    </Card>
                    <Card className="m-2 row-start-3 mt-10">
                        <CommentInputCell/>
                    </Card>
                </CardBody>
                <CardFooter>
                        {comServerData.dtoList.map((dto) => {
                            return (
                                <CommentCell key={dto.comNo} writer={dto.writer} content={dto.content}/>
                            )
                        })}
                        <PageComponent serverData={comServerData} movePage={loadToList} pathName={pathName}/>
                </CardFooter>
            </Card>
        </section>

    );
}

export default ReadPage;
