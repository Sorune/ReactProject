import axios from 'axios';
//import {API_SERVER_HOST} from "./filesApi";

export const API_SERVER_HOST = 'http://localhost:8001';

// 로그인 API 호출 함수
export const login = async (id, password) => {
    const prefix = `${API_SERVER_HOST}/api/member/login`;
    axios.post(prefix, { id, pw: password })
        .then(response => {
            console.log(response.data.result);
            if (response.data.result === "SUCCESS") {
                alert("Login successful: " + response.data.message);

            } else {
                alert("Login failed: " + response.data.message);
                return false;
            }
        })
        .catch(error => {
            console.error('Login request failed', error);
            alert("로그인 실패: " + (error.response?.data?.message || "서버 연결 실패"));
        });
};