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
    const pageReset = useResetRecoilState(pageState)
    return(
        <Card className="max-h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Menu
                </Typography>
            </div>
            <List>
                <ListItem onClick={() => { pageReset(); navigate('/news/') }}>
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    News
                </ListItem>
                <ListItem onClick={() => { pageReset(); navigate('/board/') }}>
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Board
                </ListItem>
                <ListItem onClick={() => { pageReset(); navigate('/free/') }}>
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    FreeBoard
                </ListItem>
                <ListItem onClick={() => { pageReset();  navigate('/player/') }}>
                    <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Player
                </ListItem>

                <Menu>
                    <MenuHandler>
                <ListItem onClick={() => { pageReset();  navigate('/lol/list') }}>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                   게임정보
                </ListItem>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem  onClick={() => { navigate('/lol/list') }} >챔피언</MenuItem>
                        <MenuItem  onClick={() => { navigate('/lol/itemlist') }} >아이템</MenuItem>
                    </MenuList>
                </Menu>

                <ListItem onClick={() => { pageReset();  navigate('/ticketing/') }}>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    경기일정
                </ListItem>
            </List>
        </Card>
    )
}
export default Sidebar;