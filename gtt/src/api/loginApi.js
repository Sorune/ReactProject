import axios from 'axios';
//import { API_SERVER_HOST } from "./filesApi";
const API_SERVER_HOST = "http://localhost:8001";

// 로그인 api 호출
export const login = async (id, password) => {
    const prefix = `${API_SERVER_HOST}/api/member/login`;
    try {
        const response = await axios.post(prefix, { userId: id, pw: password });
        return response;
    } catch (error) {
        console.error("Login API error:", error);
        throw new Error('Failed to login');
    }
};