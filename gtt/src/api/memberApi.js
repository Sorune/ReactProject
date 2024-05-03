
// 요청을 수행하기 위한 서버 경로
import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";

// 회원 리스트 출력 ㅇ
export const memberList = async () => {
    const res = await axios.get(`${API_SERVER_HOST}/api/member/list`);
    return res.data;
};

// 회원 한명 조회 ㅇ
export const getMember = async (num) => {
    try {
        const response = await axios.get(`${API_SERVER_HOST}/api/member/${num}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching member', error);
        return null;
    }
};

// 회원 삭제 ㅇ
export const removeMember = async (num) => {
    const res = await axios.delete(`${API_SERVER_HOST}/api/member/${num}`);
    return res.data;
}

// 회원수정 ㅇ
export const updateMember = async (num, userId, nick, birth, zoneCode, address, addrSub) => {
    console.log(num, userId, nick, birth, zoneCode, address, addrSub)
    const header =     {headers: {'Content-Type': 'application/json'}}
    const res = await axios.put(`${API_SERVER_HOST}/api/member/${num}`,
        {
            "userId":userId,
            // "pw":pw,
            "nick":nick,
            "birth":birth,
            "zoneCode":zoneCode,
            "address":address,
            "addrSub":addrSub
        }, header)
        .then(function (res)  {
            console.log(res.data.result);
            if (res.data.result === "SUCCESS") {
                alert("회원정보 수정 성공 : " + res.data.message);
                return true;
            } else if(res.data.result === "FAILURE") {
                alert("회원정보 수정 실패 : " + res.data.message);
                return false;
            }
        })
        .catch();
}
