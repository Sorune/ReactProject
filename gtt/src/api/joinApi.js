import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";
import {useNavigate} from "react-router-dom";
// 요청을 완료하기 위한 서버 경로;

export const join = async (id, password, nick, birth, zoneCode, address, addrSub) => {
    const prefix = `${API_SERVER_HOST}/api/member/`;
    axios.post(prefix, {
        "userId" : id,
        "pw" : password,
        "nick" : nick,
        "birth" : birth,
        "zoneCode" : zoneCode,
        "address" : address,
        "addrSub" : addrSub
    }).then((response) => {
        console.log(response,response.data)
        const result = response.data.memBno;
        console.log("결과는 : " + result);
        if(result) {
            alert("회원가입을 성공했습니다 로그인 화면으로 이동합니다.: " + result);
            navigate("/login")
        }else {
            alert("회원가입을 실패했습니다.");
        }
    })
};

// 회원 아이디 검증 메서
export const validateID = async (id) => {
    try {
        console.log(id)
        const prefix = `${API_SERVER_HOST}/api/member/checkId/${id}`;
        const response = await axios.get(prefix)

        console.log(response.data.message);
        if (response.data.message  === true) {
            alert("사용 가능한 id입니다!");
        } else {
            alert("이미 사용중인 id입니다!");
        }
    } catch (error) {
        console.error("회원 id 리스트 불러오기 실패! :", error);
        alert("id 검증 api호출에 실패했습니다!");
    }
}
