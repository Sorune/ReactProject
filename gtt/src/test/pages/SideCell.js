import SidebarLayout from "../../layouts/SidebarLayout";
import {
    Card,
    Chip,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Menu,
    MenuHandler, MenuItem, MenuList,
    Typography
} from "@material-tailwind/react";
import {
    Cog6ToothIcon,
    InboxIcon, PowerIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon
} from "@heroicons/react/16/solid";
import {useResetRecoilState} from "recoil";
import {pageState} from "../../atoms/pageState";
import {Link, useNavigate} from "react-router-dom";
import React from "react";
import useCustomMove from "../../hooks/useCustomMove";

const Sidebar = ()=>{

    const navigate = useNavigate();

    return(
        <Card className="max-h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="p-4">
                <Typography variant="h5" color="blue-gray">
                    <small>실시간 관심글</small>
                </Typography>
            </div>
            <hr/>
            <div className="p-4">
                글
            </div>
        </Card>
    )
}
export default Sidebar;