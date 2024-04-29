import axios from 'axios';
import {API_SERVER_HOST} from "./filesApi";

// 로그인 API 호출 함수
export const login = async (id, password) => {
    const prefix = `${API_SERVER_HOST}/api/member/login`;
    axios.post(prefix,{"userId":id,"pw":password})
        .then(response => {
            console.log(response.data.result);
            if (response.data.result === "SUCCESS") {
                alert("로그인 성공 : " + response.data.message);
                return true;
            } else if(response.data.result === "FAILURE") {
                alert("로그인 실패 : " + response.data.message);
                return false;
            }
        })
        .catch(error => {
            console.error('로그인 요청 실패 : ', error);
            alert("로그인 실패: " + (error.response?.data?.message || "서버 연결 실패"));
        });
};


// export async function handleLogin(userId, password) {
//     const url = `${API_SERVER_HOST}/api/member/login`;
//     try {
//         const response = await axios.post(url, {
//             "userId" : userId,
//             "pw": password
//         });
//         if (response.status === 200) {
//             return response.data;
//         } else {
//             throw new Error('잘못된 자격 증명');
//         }
//     } catch (error) {
//         if (error.response) {
//             // If the server responded with a status other than the successful range
//             console.error('에러 상태 :', error.response.status);
//             console.error('에러 데이터 :', error.response.data);
//             throw new Error(error.response.data.message || '잘못된 자격 증명');
//         } else {
//             throw new Error('네트워크 오류 또는 서버가 다운되었습니다.');
//         }
//     }
// }

// export async function handleLogin(userId, password) {
//     const url = `${API_SERVER_HOST}/api/member/login`;
//     console.log(`userID에 대한 로그인 요청 보내기: ${userId}`);  // Debugging line
//     try {
//         const response = await axios.post(url, {
//             userId,
//             pw: password
//         }, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         console.log("로그인 응답 : ", response);  // Debugging line
//         return response.data;
//     } catch (error) {
//         console.error('로그인 에러 : ', error);
//         if (error.response) {
//             // More detailed error logging
//             console.error('에러 상태 : ', error.response.status);
//             console.error('에러 데이터 : ', error.response.data);
//             throw new Error(error.response.data.message || '잘못된 자격 증명');
//         } else {
//             throw new Error('네트워크 오류 또는 서버가 다운되었습니다.');
//         }
//     }
// }
