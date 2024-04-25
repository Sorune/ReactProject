import ContentHeader from "../../components/common/ContentHeader";
import {Button, Card, CardBody, CardFooter} from "@material-tailwind/react";
import React, {forwardRef, useRef, useState} from "react";
import ContentInputBody from "../../components/common/ContentInputBody";
import {useRecoilValue} from "recoil";
import useCustomMove from "../../hooks/useCustomMove";
import {pageState} from "../../atoms/pageState";
import {DropDownInput} from "../../components/common/DropDownInput";



const WritePage =forwardRef(()=>{
    const page = useRecoilValue(pageState)
    const {moveToList} = useCustomMove();

    return (
        <section className="bg-white w-full h-full p-2 py-2">
            <ContentHeader page={page} pathName={'/news/list'} moveTo={moveToList}/>
            <Card className="flex flex-auto p-1">
                <CardBody>
                    <ContentInputBody/>
                </CardBody>
            </Card>
        </section>
    )
})
export default WritePage;
