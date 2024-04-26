
// 요청을 수행하기 위한 서버 경로
import axios from "axios";

const API_SERVER_HOST = 'http://localhost:8001';

// 회원 리스트 출력
export const memberList = async () => {
    const respons = await axios.get(`${API_SERVER_HOST}/list`);
    return respons.data;
};

// 회원 삭제
export const removeMember = async (num) => {
    const respons = await axios.delete(`${API_SERVER_HOST}/${num}`);
    return respons.data;
}

// 회원수정
export const updateMember = async (userId, pw, nick, birth, zoneCode, adress, addrSub) => {
    const respons = await axios.put(`${API_SERVER_HOST}/${num}`,
        {
            
        }
        )
}