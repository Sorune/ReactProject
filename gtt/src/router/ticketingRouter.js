import {Suspense, lazy} from "react";
import Spin from "../test/pages/Spin";

const Loading = Spin;
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
