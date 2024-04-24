import Spin from "../test/pages/Spin";
import {lazy, Suspense} from "react";


const Loading = Spin
const PlayerIndex = lazy(()=> import('../pages/player/PlayerIndexPage')) ;

const playerRouter = () => {
    return [
        {
            path:"player",
            element: <Suspense fallback={Loading}><PlayerIndex/></Suspense>
        }
    ]
}

export default playerRouter
