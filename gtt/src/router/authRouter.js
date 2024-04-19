import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading....</div>;
const LoginAuth = lazy(()=>import("../pages/loginAuth/Login.js"));  // 로그인 페이지
<<<<<<< HEAD
const SignIn = lazy(()=>import("../pages/loginAuth/SignIn.js"));    // 회원가입 페이지
=======
const SignIn = lazy(()=>import("../pages/loginAuth/SignIn.js"));    // 회원가입 페이지   
>>>>>>> 36decb7277439075a7657e1da5732c6f3c083757

const authRouter = ()=> {
    return[
        {
            path: "Login",
            element: <Suspense fallback={Loading}><LoginAuth/></Suspense>
        },
        {
            path: "SignIn",
            element: <Suspense fallback={Loading}><SignIn/></Suspense>
        }
    ]
}

export default authRouter;