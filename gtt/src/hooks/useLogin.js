import { useState } from "react";

// 아이디
export const useId = (initID) => {
    const [loginID, setLoginID] = useState(initID);
    const insertIdChange = (e) => {
        setLoginID(e.target.value);
    };
    return [loginID, insertIdChange];
}

// 비밀번호
export const usePw = (initPW) => {
  const [loginPw, setLoginPW] = useState(initPW);
  const insertPwChange = (e) => {
      setLoginPW((e.target.value));
  }
  return [loginPw, insertPwChange];
};