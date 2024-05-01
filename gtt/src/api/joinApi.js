import axios from "axios";
const API_SERVER_HOST = "http://localhost:8001";

// 로그인
export const login = async (id, password) => {
    const url = `${API_SERVER_HOST}/api/member/login`;
    try {
        const response = await axios.post(url, {
            "userId": id,
            "pw": password
        });
        return response.data;
    } catch (error) {
        throw error; 
    }
};

// 아이디 중복확인
export const validateID = async (id) => {
    const url = `${API_SERVER_HOST}/api/member/checkId/${id}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error; 
    }
};

// 닉네임 중복확인
export const validateNick = async (nick) => {
    const url = `${API_SERVER_HOST}/api/member/checkNick/${nick}`;
    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        throw error; 
    }
};

// 회원가입
export const join = async (id, password, nick, birth, zoneCode, address, addrSub, phone, email) => {
    const url = `${API_SERVER_HOST}/api/member/join`;
    try {
        const response = await axios.post(url, {
            "userId": id,
            "pw": password,
            "nick": nick,
            "birth": birth,
            "zoneCode": zoneCode,
            "address": address,
            "addrSub": addrSub,
            "phone": phone,
            "email": email
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};