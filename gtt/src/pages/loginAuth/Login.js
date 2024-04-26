import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { useId, usePw } from "../../hooks/useLogin";
// import {handleLogin} from "../../api/loginApi";
import {login} from "../../api/loginApi";

const Login = () => {
    // useLogin에서 리턴한 값/메서드
    const [loginID, insertIdChange] = useId("");
    const [loginPW, insertPwChange] = usePw("");

    const navigate = useNavigate();
    // 회원가입 페이지로 이동하는 메서드
    const moveToLink = (e) => {
        // 클릭한 요소에서 'data-value' 속성 값을 가져와서 목적지 변수에 저장
        const destination = e.target.dataset.value;
        // 목적지 값에 따라 다르게 처리 "login"이면 로그인 페이지로 이동하고
        switch (destination) {
            case "/" :          // 홈메인으로 이동
                navigate("/");
                break;
            case "signIn" :     // 회원가입으로 이동
                navigate("/signIn");
                break;
        }
    };

    const goLogin = async (e) => {
        e.preventDefault();
        try {
            // const data = await handleLogin(loginID, loginPW);
            const data = await login(loginID, loginPW);
            console.log(data);
            if(data === true) {
                alert('로그인 성공 : ' + data.message);
                navigate('/');  // 성공 후 메인으로 이동
            }else if(data === false) {
                alert('로그인 실패 : ' + data.message);
            }
            // switch (data) {
            //     case "SUCCESS" :
            //         alert('로그인 성공 : ' + data.message);
            //         return navigate('/');  // 성공 후 메인으로 이동
            //     case "FAILURE" :
            //         alert('로그인 실패 : ' + data.message);
            //         break;
            // }

        } catch (error) {
            alert(error.message);  // API의 오류 메시지 또는 처리된 오류 표시
        }
    }



    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" data-value="/" onClick={moveToLink} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"> */}
                        GTT    
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                LOGIN
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={goLogin}>
                                <div>
                                    <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                                    <input type="text" value={loginID} onChange={insertIdChange} name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your id"/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" value={loginPW} onChange={insertPwChange} name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••"/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">로그인정보 기억하기</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">ID/PW 찾기</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    로그인
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    계정이 없으신가요? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" data-value="signIn" onClick={moveToLink}>회원가입</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;