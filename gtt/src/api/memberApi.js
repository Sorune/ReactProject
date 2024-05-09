
// 요청을 수행하기 위한 서버 경로
import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";

const prefix = `${API_SERVER_HOST}/api/member`;

// 회원 리스트 출력
export const memberList = async (tokenInfo) => {
    const response = await axios.get(`${prefix}/members`, {
        headers: {
            // tokenInfo에서 토큰 값을 추출하여 Bearer 토큰으로 설정
            Authorization: `Bearer ${tokenInfo.token}`
        }
    });
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
    const header = {headers: {'Content-Type': 'application/json'}}
    const response = await axios.put(`${prefix}/${num}`,
        {
            "userId":userId,
            // "pw":pw,
            "nick":nick,
            "birth":birth,
            "zoneCode":zoneCode,
            "address":address,
            "addrSub":addrSub
        }, header);
        return response.data;
}
