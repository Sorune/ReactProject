import {Suspense, lazy} from "react";
import {Navigate} from "react-router-dom";
import Spin from "../test/pages/Spin";

const Loading = Spin;
const NewsList = lazy(()=>import("../pages/news/ListPage.js"))
const ReadNews = lazy(()=>import("../pages/news/BasicReadPage"))

const newsRouter = ()=>{
    return[
        {
            path:"list",
            element:<Suspense fallback={Loading}><NewsList /></Suspense>
        },
        {
            path:"",
            element: <Navigate replace to="list" />
        },
        {
            path: "read/:newsNo",
            element: <Suspense fallback={Loading}><ReadNews /></Suspense>
        }
    ]
}

export default newsRouter;
