import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter.js";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>
const Main = lazy(()=>import("../pages/MainPage.js"))
const About = lazy(()=>import("../pages/AboutPage.js"))
const TodoIndex = lazy(()=>import("../pages/todo/IndexPage.js"))
const TodoList = lazy(()=>import("../pages/todo/ListPage.js"))

const root = createBrowserRouter([
    {
        path:"",
        element:<Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex /></Suspense>,
        children:todoRouter()
    }
])

export default root;