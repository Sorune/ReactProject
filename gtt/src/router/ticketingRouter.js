import {Suspense, lazy} from "react";
import {Navigate} from "react-router-dom";

const Loading = <div>Loading</div>
const TicketingMain = lazy(()=>import("../pages/news/ListPage.js"));

const newsRouter = ()=>{
    return[
        {
            path:"list",
            element:<Suspense fallback={Loading}><TicketingMain /></Suspense>
        }
    ]
}

export default newsRouter;