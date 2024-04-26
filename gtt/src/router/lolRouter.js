import {Suspense, lazy} from "react";
import {Navigate} from "react-router-dom";
import Spin from "../test/pages/Spin";

const Loading = Spin;
const LoLList = lazy(()=>import("../pages/leagueoflegend/LoLListPage"))

const lolRouter = ()=>{
    return[
        {
            path:"list",
            element:<Suspense fallback={Loading}><LoLList /></Suspense>
        },
    ]
}

export default lolRouter;
