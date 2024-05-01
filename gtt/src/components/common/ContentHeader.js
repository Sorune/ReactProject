import {Breadcrumbs, Button} from "@material-tailwind/react";
import {Link, useLocation} from "react-router-dom";
import React from "react";

const ContentHeader = ({moveTo,pathName,page, moveToModify, serverData,newsNo ,notiNo})=>{
    const path = useLocation().pathname.split("/")[2];
    const pathNum = useLocation().pathname.split("/")[3];
    return (
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
                <Button className="rounded-full" onClick={() => moveTo({
                    pathName:pathName+'list',
                    pageParam: {page: `${page.page}`, size: `${page.size}`}
                })}>List</Button>
                {path==="read"?
                    <Button className="rounded-full"
                         onClick={() => moveToModify({pathName: pathName+"modify", num: newsNo})}>Modify</Button>:<></>}
            </div>
        </div>
    )
}
export default ContentHeader
