import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading....</div>;
const LoginAuth = lazy(()=>import("../pages/loginAuth/login.js"));  // 로그인 페이지
const SignIn = lazy(()=>import("../pages/loginAuth/signIn.js"));    // 회원가입 페이지   

const authRouter = ()=> {
    return[
        {
            path: "login",
            element: <Suspense fallback={Loading}><LoginAuth/></Suspense>
        },
        {
            path: "signIn",
            element: <Suspense fallback={Loading}><SignIn/></Suspense>
        }
    ]
}

export default authRouter;