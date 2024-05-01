import axios from 'axios';
import { API_SERVER_HOST } from "./filesApi";

// 로그인 api 호출
export const login = async (id, pw) => {
    const prefix = `${API_SERVER_HOST}/api/member/login`;
    try {
        const response = await axios.post(prefix, { "userId": id, "pw": pw });
        return response;
    } catch (error) {
        console.error("Login API error:", error);
        throw new Error('Failed to login');
    }
};