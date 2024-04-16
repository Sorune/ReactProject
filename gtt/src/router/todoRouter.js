import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading....</div>
const TodoList = lazy(()=>import("../pages/todo/ListPage.js"))
const TodoRead = lazy(()=>import("../pages/todo/ReadPage.js"))
const TodoAdd =lazy(()=>import("../pages/todo/AddPage.js"))
const TodoModify = lazy(()=>import("../pages/todo/ModifyPage.js"))
const todoRouter = ()=> {
    return[
        {
            path: "list",
            element: <Suspense fallback={Loading}><TodoList/></Suspense>
        },
        {
            path: "",
            element:<Navigate replace to="list" />
        },
        {
            path: "read/:tno",
            element: <Suspense fallback={Loading}><TodoRead /></Suspense>
        },
        {
            path:"add",
            element: <Suspense fallback={Loading}><TodoAdd /></Suspense>
        },
        {
            path:"modify/:tno",
            element:<Suspense fallback={Loading}><TodoModify /></Suspense>
        }
    ]
}

export default todoRouter;