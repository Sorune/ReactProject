import {useCallback} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import DatePicker from "../../components/common/DatePicker";

const IndexPage=()=>{
    return (
        <BasicLayout>
            <DatePicker />
            <div>News</div>
            <div>
                <Outlet />
            </div>
        </BasicLayout>
    )
}

export default IndexPage;