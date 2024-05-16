import {Suspense} from "react";
import Spin from "../test/pages/Spin";
import CartList from "../pages/cart/CartList"

const Loading = Spin

const cartRouter = () =>
{
    return[
        {
            path: "list",
            element: <Suspense fallback={Loading}><CartList/></Suspense>
        },
        {
            path: "payment",
            element: <Suspense fallback={Loading}></Suspense>
        }
    ]
}
export default cartRouter