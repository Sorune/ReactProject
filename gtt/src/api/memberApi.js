
// 요청을 수행하기 위한 서버 경로
import axios from "axios";

const API_SERVER_HOST = 'http://localhost:8001';

// 회원 리스트 출력
export const memberList = async () => {
    const res = await axios.get(`${API_SERVER_HOST}/list`);
    return respons.data;
};

// 회원 한명 조회
export const getMember = async () => {
    const res = '';
}

// 회원 삭제
export const removeMember = async (num) => {
    const res = await axios.delete(`${API_SERVER_HOST}/${num}`);
    return res.data;
}

// 회원수정
export const updateMember = async (userId, pw, nick, birth, zoneCode, adress, addrSub) => {
    const res = await axios.put(`${API_SERVER_HOST}/${num}`,
        {
            "userId":userId,
            "pw":pw,
            "nick":nick,
            "birth":birth,
            "zoneCode":zoneCode,
            "adress":adress,
            "addrSub":addrSub
        })
        .then(function (res)  {

        })
        .catch();
}