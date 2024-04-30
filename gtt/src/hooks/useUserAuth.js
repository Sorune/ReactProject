import { useState } from "react";


const useUserAuth = () =>{
    // 아이디
    const checkId = (initID) => {
        const [loginID, setLoginID] = useState(initID);
        const insertIdChange = (e) => {
            setLoginID(e.target.value);
        };
        return [loginID, insertIdChange];
    }

    // 비밀번호
    const checkPw = (initPW) => {
        const [loginPw, setLoginPW] = useState(initPW);
        const insertPwChange = (e) => {
            setLoginPW((e.target.value));
        }
        return [loginPw, insertPwChange];
    };

    return {checkId, checkPw}
}


