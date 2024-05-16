import {Avatar, Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";
import React from "react";


export const PlayerCardSection = ()=>{
    return(
        <Card className="relative grid h-[15rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-t from-black/80 via-black/50">
            <CardBody className="relative py-14 px-6 md:px-12 opacity-0 hover:opacity-100">
                <Typography variant="h2" color="white" className="mb-6 font-medium leading-[1.5]">
                </Typography>
            </CardBody>
        </Card>
    )
}