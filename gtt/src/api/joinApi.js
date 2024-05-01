import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";

const prefix = `${API_SERVER_HOST}/api/member`;

// 로그인
export const login = async (userId, pw) => {
    const url = `${prefix}/login`;
    let formData = new FormData();
    formData.append("username",userId);
    formData.append("password",pw);
    try {
        const response = await axios.post(url, formData);
        console.log(response)
        return response.data;
    } catch (error) {
        throw error; 
    }
};

// 아이디 중복확인
export const validateID = async (userId) => {
    const url = `${prefix}/checkId/${userId}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error; 
    }
};

// 닉네임 중복확인
export const validateNick = async (nick) => {
    const url = `${prefix}/checkNick/${nick}`;
    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        throw error; 
    }
};

// 회원가입
export const join = async (userId, pw, nick, birth, zoneCode, address, addrSub, phone, email) => {
    const url = `${prefix}/`;
    const memberData = {
        userId, // 백엔드에서 기대하는 키 이름과 같은지 확인 필요
        pw,
        nick,
        birth,
        zoneCode,
        address,
        addrSub,
        phone,
        email
    };
    try {
        const response = await axios.post(url, memberData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};