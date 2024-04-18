import {useParams} from "react-router-dom";
import {Button, Card, CardBody, CardFooter, CardHeader, Typography} from "@material-tailwind/react";
import PageComponent from "../../components/common/PageComponent";
import {getComList} from "../../api/commentApi";
import useCustomMove from "../../hooks/useCustomMove";
import {useEffect, useState} from "react";
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

const ReadPage = ()=>{
    const {page, size, refresh,moveToList,moveToRead} = useCustomMove()
    const {newsNo} = useParams()
    const [comServerData, setComServerData] = useState(initState)

    useEffect(() => {
        getList({page,size}).then(data=>{
            setComServerData(data)
        })
    }, [page, size, refresh]);
    return(
        <section className="bg-white w-full h-full p-2 py-4">
            <Card className="flex flex-auto p-1">
                <div>
                    <Button>List</Button>
                    <Button>Modify</Button>
                </div>
                <CardBody>
                    <div className="flex flex-box">
                        ReadNews {newsNo}&nbsp;
                    </div>
                    <div>
                        content....
                    </div>
                </CardBody>
                <CardFooter>
                    <Card className="p-2">
                        <Button>Add</Button>
                        <Card className="p-2">
                            <div className="grid grid-cols-2">
                                <div>
                                    <Typography variant="h3">
                                        comment writer...
                                    </Typography>
                                    <Typography variant="h5">
                                        test Comment
                                    </Typography>
                                </div>
                                <ul>
                                    <li>
                                        <Button>modify</Button>
                                    </li>
                                    <li>
                                        <Button>delete</Button>
                                    </li>
                                </ul>
                            </div>
                        </Card>

                        <PageComponent serverData={comServerData} movePage={moveToList}/>
                    </Card>
                </CardFooter>
            </Card>
        </section>
    );
}

export default ReadPage;