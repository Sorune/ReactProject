import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";

const prefix = `${API_SERVER_HOST}/api/member`;

// 로그인
export const login = async (userId, password) => {
    const url = `${prefix}/login`;
    let formData = new FormData();
    formData.append("username", userId);
    formData.append("password", password);
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
export const join = async (userId, password, nick, birth, zoneCode, address, addrSub, phone, email) => {
    const url = `${prefix}/`;
    let formData = new FormData();
    formData.append("username", userId);
    formData.append("password", password);
    formData.append("nick", nick);
    formData.append("birth", birth);
    formData.append("zoneCode", zoneCode);
    formData.append("address", address);
    formData.append("addrSub", addrSub);
    formData.append("phone", phone);
    formData.append("email", email);

    try {
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
};