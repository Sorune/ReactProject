import { useNavigate } from 'react-router-dom';
import { login, validateID, validateNick, join } from "../api/joinApi";

const useUserAuth = () => {
    // 페이지 네비게이션
    const navigate = useNavigate();

    // 로그인
    const checkIdAndPw = (userId, password) => {
        login(userId, password)
            .then(result => {
                console.log(result);
                if (result.token) {
                    // 로그인 성공 메시지
                    alert("로그인 되었습니다.");
                    // 메인 페이지로 이동
                    navigate("/");
                } else {
                    // 실패 메시지
                    alert("아이디/비밀번호를 확인하세요.");
                }
            })
            .catch(error => {
                console.log(error);
                // 오류 메시지
                alert("로그인 과정에서 오류가 발생했습니다: " + error.message);
            });
    };


    // 아이디 중복 검사
    // const checkId = async (userId) => {
    //     try {
    //         // ID 검증 API 호출
    //         const result = await validateID(userId);
    //         if (!result.data.userId.equals(userId)) {
    //             // 사용 가능할 때
    //             alert("사용 가능한 ID입니다.");
    //         } else {
    //             // 이미 사용 중일 때
    //             alert("이미 사용중인 ID입니다.");
    //         }
    //     } catch (error) {
    //         // 오류 발생시
    //         alert("ID 검증 중 오류가 발생했습니다.");
    //     }
    // };

    // 비밀번호 일치 확인
    const checkPw = (password, confirmPw) => {
        if (password !== confirmPw) {
            // 비밀번호 불일치
            alert("비밀번호가 일치하지 않습니다.");
            return false;
        }
        // 일치하면 true
        return true;
    };

    // 닉네임 중복 검사
    // const checkNick = async (nick) => {
    //     try {
    //         // 닉네임 검증 API 호출
    //         const result = await validateNick(nick);
    //         if (result.available) {
    //             // 사용 가능할 때
    //             alert("사용 가능한 닉네임입니다.");
    //         } else {
    //             // 이미 사용 중일 때
    //             alert("이미 사용중인 닉네임입니다.");
    //         }
    //     } catch (error) {
    //         // 오류 발생시
    //         alert("닉네임 검증 중 오류가 발생했습니다.");
    //     }
    // };

    // 전화번호 포맷팅
    const formatPhoneNumber = (phoneNumber) => {
        // 숫자만 추출
        const numericPhone = phoneNumber.replace(/[^\d]/g, '');
        if (numericPhone.length <= 3) return numericPhone;
        if (numericPhone.length <= 7) return `${numericPhone.slice(0, 3)}-${numericPhone.slice(3)}`;
        // 포맷 적용
        return `${numericPhone.slice(0, 3)}-${numericPhone.slice(3, 7)}-${numericPhone.slice(7, 11)}`;
    };

    // 전화번호 유효성 검사
    const validatePhoneNumber = (phoneNumber) => {
        // 하이픈 제거
        const normalizedPhone = phoneNumber.replace(/-/g, '');
        if (normalizedPhone.length !== 11) {
            // 11자리 아니면 경고
            alert("전화번호는 11자리 숫자여야 합니다.");
            return false;
        }
        // 11자리면 true
        return true;
    };

    // 회원가입
    const joinMember = (e, userId, password, phone, nick, email, birth, address, addrSub, zoneCode) => {
        // 기본 이벤트 중단
        e.preventDefault();

        // 전화번호 검증 (주석 처리된 코드 사용을 원할 경우 주석 해제)
        // if (!validatePhoneNumber(phone)) {
        //     alert("유효하지 않은 전화번호입니다.");
        //     return;
        // }

        join(userId, password, nick, birth, zoneCode, address, addrSub, phone, email) // 회원가입 API 호출
            .then(result => {
                if (result.success) {
                    // 성공 메시지
                    console.log(result);
                    alert("회원가입이 완료되었습니다. 로그인 페이지로 돌아갑니다.");
                    // 로그인 페이지 이동
                    navigate("/login");
                } else {
                    // 실패 메시지
                    console.log(result);
                    alert("회원가입에 실패했습니다.");
                }
            })
            .catch(error => {
                // 오류 로깅
                console.log(error);
                // 오류 메시지
                alert("회원가입 과정에서 오류가 발생했습니다: " + error.message);
            });
    };

    // 모든 리턴
    return { checkIdAndPw, checkPw, joinMember, formatPhoneNumber, validatePhoneNumber };
};

export default useUserAuth;