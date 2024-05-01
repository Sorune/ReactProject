import BasicLayout from "../layouts/BasicLayout";
import {Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import {getList} from "../api/newsApi";
import useCustomMove from "../hooks/useCustomMove";
import {useRecoilState} from "recoil";
import {pageState} from "../atoms/pageState";
import CardListComponent from "../components/common/CardListComponent";
import SidebarLayout from "../layouts/SidebarLayout";

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

export const TestimonialCard =({img,client,clientInfo,}) =>{
    const [page,setPage] = useRecoilState(pageState)
    const {refresh,moveToList,moveToRead, moveToAdd} = useCustomMove()
    const [serverData, setServerData] = useState(initState)
    useEffect(() => {
        getList({page: 1, size: 5}).then(data => {
            setServerData(data)
        })
    },[refresh]);
    console.log(serverData)
    return (
        <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6">
            <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    {!serverData.error&&serverData.dtoList.length >0 && (
                        <CardListComponent serverData={serverData} page={1} size={5}/>)
                    }
                </table>
            </CardBody>
        </Card>
);
}

const MainPage= () =>{
    return (
            <SidebarLayout>
                <section className="px-8 py-10 lg:py-28 h-full bg-white">
                    <div className="container mx-auto">
                        <Typography
                            variant="h2"
                            color="blue-gray"
                            className="mb-4 !text-2xl lg:!text-4xl"
                        >
                            The heartfelt testimonials of our community
                        </Typography>
                        <Typography
                            variant="lead"
                            className="max-w-3xl !text-gray-500 mb-10 lg:mb-20"
                        >
                            From life-enhancing gadgets to unparalleled customer support, and
                            transformative learning opportunities.
                        </Typography>
                        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                        </div>
                    </div>
                </section>
            </SidebarLayout>

    );
}

export default MainPage;
