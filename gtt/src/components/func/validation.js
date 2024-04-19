// ID 검증 메서드 : 중복 아이디 체크 / 글자수 체크 - 인풋창의 포커스가 빠지면 나타나는 이벤트
export const checkID = async(id) => {
    const sameId = ["user", "id", "john", "1111"];
    if (sameId.includes(id)) {
        alert("이미 사용중인 아이디입니다.");
        return false;
    }
    if (id.length < 8) {
        alert("아이디는 8자 이상이어야 합니다.");
        return false;
    }
    return true;
};
// 비밀번호 검증 메서드
export const checkPasswords = async(password, confirmPassword) => {
    if (password !== confirmPassword) {
        alert("입력한 비밀번호가 일치하지 않습니다.");
        return false;
    }
    return true;
};
// 닉네임 검증 메서드 : 중복 닉네임 체크 / 사용할 수 없는 문자 / 부적합한 닉네임 체크
export const checkNickname = async(nickname) => {
    const sameNick = ["user", "id", "john", "1111"];
    // 예시로 만든 부적합한 user nickName List (추가 수정 예정 / input Blur 이벤트용)
    const forbiddenWords = [
        "fuck",
        "sex",
        "bono",
        "bitch",
        "씨발",
        "ㅗ",
        "ㅈㄹ",
        "지랄",
        "시발",
        "너희부모님",
        "부모욕",
        "xx",
        "개새끼",
        "tlqkf",
        "마약",
        "살인",
        "총기",
        "고인욕",
    ];
    if (sameNick.includes(nickname)) {
        // 경고창을 출력
        alert("이미 사용중인 닉네임입니다.");
        // input - id의 value값을 비운다
        return false;
    }
    if (forbiddenWords.includes(nickname)) {
        // 경고창을 출력
        alert("부적합한 닉네임입니다.");
        // input - nickname의 value값을 비운다
        return false;
    }
};
