import SidebarLayout from "../../layouts/SidebarLayout";
import {
    Button,
    Card, Checkbox,
    Chip,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Menu,
    MenuHandler, MenuItem, MenuList,
    Typography
} from "@material-tailwind/react";

import {useRecoilState, useResetRecoilState} from "recoil";
import {pageState} from "../../atoms/pageState";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import useCustomMove from "../../hooks/useCustomMove";
import {hotFreePost} from "../../api/freeBoardApi";

const TABLE_HEAD = ["제목", "조회수"];


const Sidebar = ()=>{
    const [page,setPage] = useRecoilState(pageState)
    const [freeData, setFreeData] = useState([])
    const {moveToRead} = useCustomMove()

    useEffect(() => {
        hotFreePost({page: page.page, size: page.size})
            .then(data => {
                setFreeData(data)
            })
            .catch(error => {


            })
    }, [page])


    return(
        <Card className="w-full shadow-xl shadow-blue-gray-900/5">
            <div className="p-4 flex justify-center">
                <Typography variant="h5" color="blue-gray">
                    <small>실시간 관심글</small>
                </Typography>
            </div>
            <div>
                <table className="w-full min-w-max table-auto text-center">
                    <thead>
                        {TABLE_HEAD.map((head, index) => (
                            <th
                                key={index}
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-1"
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
                    </thead>

                    <tbody>
                    {freeData.length > 0 ? (
                        freeData.map((data, index) => (
                            <tr className="p-4 border-b border-blue-gray-50" key={index} onClick={()=> moveToRead({pathName:`/free/read`,num:index,totalPage:freeData.totalCount})}>
                                <td >
                                    <div className="flex items-center gap-3 justify-center p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {data.title}
                                        </Typography>
                                    </div>
                                </td>
                                <td >
                                    <div className="flex items-center gap-3 justify-center p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {data.hits}
                                        </Typography>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="p-6 text-center" colSpan="2">
                                게시물이 없습니다.
                            </td>
                        </tr>
                    )
                    }
                    </tbody>

                </table>
            </div>
        </Card>
    )
}
export default Sidebar;