import { Suspense, lazy } from "react";
import authRouter from "./authRouter.js";
import newsRouter from "./newsRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>;
const Main = lazy(()=>import("../pages/MainPage.js"));
const About = lazy(()=>import("../pages/AboutPage.js"));
const Login = lazy(() => import("../pages/loginAuth/login.js"));
const SignIn = lazy(() => import("../pages/loginAuth/signIn.js"));
const NewsIndex=lazy(()=>import("../pages/news/IndexPage"))
const root = createBrowserRouter([
    {
        path:"",
        element:<Suspense fallback={Loading}><Main/></Suspense>
    },
    {
      path:"login",
      element:<Suspense fallback={Loading}><Login/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path : "login",
        element : <Suspense fallback = {Loading}><Login/></Suspense>,
        children : authRouter()
    },
    {
        path : "signIn",
        element : <Suspense fallback = {Loading}><SignIn/></Suspense>,
        children : authRouter()
    },
    {
        path:"news",
        element:<Suspense fallback={Loading}><NewsIndex /></Suspense>,
        children:newsRouter()
    }
])

export default root;