import { Suspense, lazy } from "react"
import Spin from "../test/pages/Spin";
import {Navigate} from "react-router-dom";

const Read = lazy(()=>import("../pages/notice/ReadPage"))
const List = lazy(()=>import("../pages/notice/ListPage"))
const Loading = Spin

const noticeRouter =() =>
{
    return[
        {
            path: "list",
            element: <Suspense fallback={Loading}><List/></Suspense>
        },
        {
          path:"list",
            element: <Navigate replace to="list"/>
        },
        {
            path: "read",
            element: <Suspense fallback={Loading}><Read/></Suspense>
        }
    ]
}
export default noticeRouter;

