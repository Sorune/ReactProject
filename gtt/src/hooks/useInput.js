import {useCallback, useState} from "react";
import {validateID} from "../api/joinApi";

// 아이디 중복 확인 훅
export const useConfirmID = (initialID) => {
    const [inputID, setID] = useState(initialID);
    const [idValid, setIdValid] = useState(null);  // 검증 결과를 저장할 상태

    const inputIdChange = (e) => {
        setID(e.target.value);  // 입력 값으로 상태 업데이트
    };

    // 아이디 검증 함수, 특정 이벤트(예: onBlur, 버튼 클릭)에서 호출될 수 있음
    const checkID = useCallback(async () => {
        try {
            const isValid = await validateID(inputID);
            setIdValid(isValid);  // validateID가 true 또는 false 반환을 가정함
        } catch (error) {
            console.error('아이디 검증 중 에러 발생:', error);
            setIdValid(false);  // 에러 처리를 위해 유효하지 않음으로 설정
        }
    }, [inputID]);

    // 입력 필드 클리어 함수
    const clearInput = () => {
        setID("");
        setIdValid(null);  // 선택적으로 검증 상태를 리셋
    };

    // 훅에서 반환할 값들과 함수
    return [inputID, inputIdChange, idValid, checkID, clearInput];
};


// 중복 닉네임 확인하는 훅
export const useConfirmNick = (initialNick) => {
    const [inputNick, setNick] = useState(initialNick);
    const compareNick = ["user", "user1234", "user1", "test", "1111"];
    const inputNickChange = (e) => {
        setNick(e.target.value);
    };
    // inputNick이 compareNick 배열에 있는지 확인
    const nickMatch = compareNick.includes(inputNick);
    // 중복이 된다면 state를 비워주는 함수
    const clearNick = () =>  setNick("");
    // 배열로 반환
    return [inputNick, inputNickChange, nickMatch, clearNick];
};


// 비밀번호 일치 확인하는 훅
export const usePasswordMatch = (initialPass, initialConfirmPass) => {
    // 입력받은 비밀번호 저장
    const [inputPass, setPass] = useState(initialPass);
    // 확인을 위해 입력받은 비밀번호 저장
    const [inputConfirmPass, setConfirmPass] = useState(initialConfirmPass);
    // 비밀번호 입력 필드가 바뀔 때 실행되는 함수
    const inputPassChange = (e) => {
        setPass(e.target.value);
    }
    // 비밀번호 확인 필드가 바뀔 때 실행되는 함수
    const inputConfirmPassChange = (e) => {
        setConfirmPass(e.target.value);
    }
    // 입력한 비밀번호가 일치하는지 확인
    const passMatch = inputPass === inputConfirmPass;
    // 비밀번호 입력창 초기화
    const clearPassword = () => {
        setPass("");
        setConfirmPass("");
    }
    // 훅에서 사용할 값들을 배열로 반환
    return [inputPass, inputPassChange, inputConfirmPass, inputConfirmPassChange, passMatch, clearPassword];
}

// 생년월일
export const useBirth = (initBirth) => {
    const [birth, setBirth] = useState(initBirth);
    const insertBirthChange = (e) => {
        setBirth(e.target.value);
    };
    return [birth, insertBirthChange];
}

// 우편번호
export const useZoneCode = (initZoneCode) => {
    const [zoneCode, setZoneCode] = useState(initZoneCode);
    const changeZoneCode = (e) => {
        setZoneCode((e.target.value));
    }
    return [zoneCode, changeZoneCode];
};

// 주소
export const useAddress = (initAddress) => {
    const [address, setAddress] = useState(initAddress);
    const changeAdress = (e) => {
        setAddress((e.target.value));
    }
    return [address, changeAdress];
};

// 나머지 주소
export const useAddrSub = (initAddrSub) => {
    const [addrSub, setAddrSub] = useState(initAddrSub);
    const insertAddrSubChange = (e) => {
        setAddrSub((e.target.value));
    }
    return [addrSub, insertAddrSubChange];
};
