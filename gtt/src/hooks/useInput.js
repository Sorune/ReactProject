import { useState } from "react";

// 중복 아이디 확인하는 훅
export const useConfirmID = (initialID) => {
    const [inputID, setID] = useState(initialID);
    // inputID = input의 value값(input의 value안의 변수명과 일치해야함)
    // setID() = input의 내용(값)이 입력되면 동작하는 onChange에 거는 메서드
    // useState에 값을 넣어줘야한다.
    const compareID = ["user", "user1234", "user1", "test", "1111"];
    // compareID - 입력된값과 중복된 문자가 있는지 확인하기위한 임시 배열
    // 추후 db의 정보를 가져다가 매칭을 시켜야 하지만 프론트 검증용으로 만들어둠
    const inputIdChange = (e) => {
        setID(e.target.value);
        // setID : 입력되면 실행되는 메서드의 값을 가져온다
    };
    // inputID가 compareID 배열에 있는지 확인
    const idMatch = compareID.includes(inputID);
    // 중복이 된다면 state를 비워주는 함수
    const clearInput = () =>  setID("");
    // 배열로 반환
    return [inputID, inputIdChange, idMatch, clearInput];
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
