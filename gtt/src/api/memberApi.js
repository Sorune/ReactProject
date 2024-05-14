
// 요청을 수행하기 위한 서버 경로
import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";
import jwtAxios from "../utill/jwtUtill";
import {tokenState} from "../atoms/tokenState";

const prefix = `${API_SERVER_HOST}/api/member`;

// 회원 리스트 출력
export const memberList = async () => {
    const response = await axios.get(`${prefix}/members`);
    return response.data;
};

// 회원 한명 조회
export const getMember = async (num) => {
        const response = await axios.get(`${prefix}/${num}`);
        return response.data;
};

// 회원 삭제
export const removeMember = async (num) => {
    const response = await axios.delete(`${prefix}/${num}`);
    return response.data;
}

// 회원수정
export const updateMember = async (num, userId, nick, birth, zoneCode, address, addrSub) => {
    //console.log(num, userId, nick, birth, zoneCode, address, addrSub);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenState}` // JWT에 대한 Bearer 토큰 사용
    };
    const response = await jwtAxios.put(`${prefix}/${num}`, {
        userId,
        nick,
        birth,
        zoneCode,
        address,
        addrSub
    }, { headers });
    return response.data;
}
