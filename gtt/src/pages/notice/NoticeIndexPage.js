import {Outlet} from "react-router-dom";
import SidebarLayout from "../../layouts/SidebarLayout";

const NoticeIndexPage = () =>{
    return (
        <SidebarLayout>
            <div>
                <Outlet />
            </div>
        </SidebarLayout>
    )
}
export default NoticeIndexPage;

