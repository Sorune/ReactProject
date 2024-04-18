import {Suspense, lazy} from "react";
import {Navigate} from "react-router-dom";

const Loading = <div>Loading</div>
const NewsList = lazy(()=>import("../pages/news/ListPage.js"))

const newsRouter = ()=>{
    return[
        {
            path:"list",
            element:<Suspense fallback={Loading}><NewsList /></Suspense>
        },
        {
            path:"",
            element: <Navigate replace to="list" />
        }
    ]
}

export default newsRouter;