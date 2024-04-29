
import {Outlet, useNavigate} from "react-router-dom";
import SidebarLayout from "../../layouts/SidebarLayout";
import {useCallback} from "react";

const NoticeIndexPage = () =>{

    const navigate = useNavigate() // 동적 페이지 이동에 사용

    //이동할 페이지 경로명
    const handleClickList = useCallback(() => {
        navigate({pathname:'list'})
    })
    const handleClickAdd = useCallback(()=>{
        navigate({pathname:'add'})
    })

    return (
        <SidebarLayout>
            <div className="w-full flex m-2 p-2">
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center" onClick={handleClickList}>
                    List
                </div>
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center" onClick={handleClickAdd}>
                    ADD
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </SidebarLayout>
    )
}
export default NoticeIndexPage;

