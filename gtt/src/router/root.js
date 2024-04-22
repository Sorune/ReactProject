import { Suspense, lazy } from "react";
import authRouter from "./authRouter.js";
import newsRouter from "./newsRouter";
import ticketingRouter from "./ticketingRouter.js";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>;
const Main = lazy(()=>import("../pages/MainPage.js"));
const About = lazy(()=>import("../pages/AboutPage.js"));
const Login = lazy(() => import("../pages/loginAuth/Login.js"));
const SignIn = lazy(() => import("../pages/loginAuth/SignIn.js"));
const NewsIndex=lazy(()=>import("../pages/news/IndexPage"));
const Ticketing = lazy(() => import("../pages/ticketing/TicketingMain.js"));
const Test = lazy(()=>import("../test/pages/TestPage.js"));
const GridTest = lazy(()=>import("../test/pages/GridTest"))
const root = createBrowserRouter([
    {
        path:"test",
        element:<Suspense fallback={Loading}><Test /></Suspense>
    },
    {
        path:"grid",
        element:<Suspense fallback={Loading}><GridTest/></Suspense>
    },

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
        path : "Login",
        element : <Suspense fallback = {Loading}><Login/></Suspense>,
        children : authRouter()
    },
    {
        path : "SignIn",
        element : <Suspense fallback = {Loading}><SignIn/></Suspense>,
        children : authRouter()
    },
    {
        path:"news",
        element:<Suspense fallback={Loading}><NewsIndex /></Suspense>,
        children:newsRouter()
    },
    {
        path:"Ticketing",
        element:<Suspense fallback={Loading}><Ticketing /></Suspense>,
        children:ticketingRouter()
    }
])

export default root;