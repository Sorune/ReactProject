import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddrPopup from './addrPopup';
import AddrWithDaum from './addrWithDaum';
import DatePicker from "../../components/common/DatePicker";


const SignIn = () => {
    // 화면 이동을 위한 useNavigate() 메서드
    const navigate = useNavigate();
    // input - id의 value값
    const idInputRef = useRef(null);
    // input - pw의 value값    
    const passwordRef = useRef(null);
    // input - pw2의 value값               
    const confirmPasswordRef = useRef(null);
    // input - nickName의 value값               
    const nickInputRef = useRef(null);
    // input - checkBox(개인정보동의)의 value값               
    const termsCheckboxRef = useRef(null);
    // 접혔다 펼치기(콜랩스)를 사용하기위한 상태관리
    const [isCollapsed, setIsCollapsed] = useState(false);
    // 주소검색 팝업창을 띄우기 위한 팝업창 상태관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    // 주소검색 결과값을 input의 value에 저장하기 위한 변수, 메서드 상태 관리
    const [address, setAddress] = useState('');
    const [zoneCode, setZoneCode] = useState('');
    // 주소 검색 후 결과 값을 반환하는 메서드
    const handleUpdateAddress = (fullAddress, zoneCode) => {
        // 들어온 우편번호, 주소 콘솔에 출력
        console.log("Received address:", fullAddress); 
        console.log("Received zone code:", zoneCode);
        setAddress(fullAddress);
        setZoneCode(zoneCode);
    };

    // 로그인 페이지로 이동하는 메서드 - 버튼 이벤트
    const moveToLogin = () => {
        // 로그인 페이지로 이동하기위한 링크 적용
        navigate("/login");
    };

    // ID 검증 메서드 : 중복 아이디 체크 - 인풋창의 포커스가 빠지면 나타나는 이벤트
    const checkID = () => {
        const inputIdValue = idInputRef.current.value;
        // 예시로 만든 user ID List (추가 수정 예정 / input Blur 이벤트용)
        const sameId = ["user", "id", "john", "1111"];
        if (sameId.includes(inputIdValue)) {
            // 경고창을 출력
            alert("이미 사용중인 아이디입니다.");
            // input - id의 value값을 비운다
            idInputRef.current.value = "";
            // input(id)에 포커스가 들어감
            idInputRef.current.focus();
            return false;
        }
    };

    // ID 검증 메서드: ID가 8자 미만일 경우 체크 - 회원가입 버튼을 눌렀을때 이벤트(onSubmit)
    const checkIDLength = () => {
        if (idInputRef.current.value.length < 8) {
            // 경고창을 출력
            alert("아이디는 8자 이상이어야 합니다.");
            // input(id)에 포커스가 들어감
            idInputRef.current.focus();
            return false;
        }
    };

    // 비밀번호 일치 확인 메서드 - 회원가입 버튼을 눌렀을때 이벤트(onSubmit)
    const checkPasswordsMatch = () => {
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            // input(pw2)에 포커스가 들어감
            confirmPasswordRef.current.focus();
            return false;
        }
    };

    // 닉네임 검증 메서드 : 중복 닉네임 체크 / 사용할 수 없는 문자 / 부적합한 닉네임 체크
    const checkNickname = () => {
        const inputNickValue = nickInputRef.current.value;
        // 예시로 만든 user nickName List (추가 수정 예정 / input Blur 이벤트용)
        const sameNick = ["user", "id", "john", "1111"];
        // 예시로 만든 부적합한 user nickName List (추가 수정 예정 / input Blur 이벤트용)
        const forbiddenWords = [
            "fuck", "sex", "bono", "bitch", "씨발", "ㅗ", "ㅈㄹ", "지랄", "시발", 
            "너희부모님", "부모욕", "xx", "개새끼", "tlqkf", "마약", "살인", "총기", "고인욕" 
        ];
        if (sameNick.includes(inputNickValue)) {
            // 경고창을 출력
            alert("이미 사용중인 닉네임입니다.");
            // input - id의 value값을 비운다
            nickInputRef.current.value = "";
            // input(id)에 포커스가 들어감
            nickInputRef.current.focus();
            return false;
        }
        if(forbiddenWords.includes(inputNickValue)) {
            // 경고창을 출력
            alert("부적합한 닉네임입니다.");
            // input - id의 value값을 비운다
            nickInputRef.current.value = "";
            // input(id)에 포커스가 들어감
            nickInputRef.current.focus();
            return false;
        }
    }

    // 버튼을 누르면 추가적인 입력창을 보여주는 메서드
    const toggleCollapse = () => {
        // 버튼 클릭 여부로 콜랩스된 div를 보여부는 메서드(Boolean)
        setIsCollapsed(!isCollapsed);
    };

    // 주소찾기 버튼을 누르면 팝업창이 주소검색 팝업창이 나타나는 메서드
    const openAddrPopup = () => {
        setIsPopupOpen(true);
    }

    // 닫기 버튼을 누르면 주소찾기 팝업창이 닫히는 메서드 
    const closeAddrPopup = () => {
        setIsPopupOpen(false);
    };

    // 폼 제출 메서드
    const handleFormSubmit = (event) => {
        // 폼 제출 방지
        event.preventDefault();
        if (!termsCheckboxRef.current.checked) {
            // 경고창을 출력 
            alert("개인정보 취급방침에 동의해야 합니다.");
            return false;
        } else if(checkPasswordsMatch() == false) {
            // 경고창을 출력
            alert("입력한 비밀번호가 일치하지 않습니다.");
            return false;
        } else if (checkIDLength() !== false && checkPasswordsMatch() !== false && checkNickname() !== false) {
            //  제출 로직 추가 예정
            //
            // 경고창을 출력
            // alert("회원 가입이 완료되었습니다! 메인화면으로 이동합니다.");
            // 홈 페이지로 이동
            // navigate("/home"); 
        }
    };

    return (
        <signInLayout>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"> */}
                        GTT    
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                JOIN
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleFormSubmit}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID 입력</label>
                                    <input ref={idInputRef} onBlur={checkID} type="text" name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="아이디를 입력하세요" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PW 입력</label>
                                    <input ref={passwordRef} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PW 입력 확인</label>
                                    <input ref={confirmPasswordRef} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label for="nick" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">닉네임</label>
                                    <input ref={nickInputRef} onBlur={checkNickname} type="text" name="nick" id="nick" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="닉네임을 입력하세요"/>
                                </div>
                                {/* 버튼을 누르면 나머지 입력창을 보여준다 */}
                                <div>
                                    <button type="button" onClick={toggleCollapse}>
                                        {isCollapsed ? "추가 정보입력(여기를 누르면 접힙니다)" : "여기를 눌러 추가 정보를 입력하세요"}
                                    </button>
                                </div>
                                {isCollapsed && (
                                    <div>
                                        <div>
                                            <label htmlFor="birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">생년월일</label>
                                            <DatePicker name=""/>
                                        </div>
                                        <div>
                                            <label for="addrNum"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">우편번호</label>
                                            <div class="grid grid-cols-12 gap-5">
                                                <div className='col-span-9'>
                                                <input type="text" name="addrNum" id="addrNum" value={zoneCode || ''} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly />
                                                    
                                                </div>
                                                <div className='col-span-3'>
                                                    {/* 버튼 클릭시 팝업 생성 */}
                                                    <button type="button" onClick={openAddrPopup}>
                                                        주소찾기
                                                    </button>
                                                    <div id='popupDom'> {/* 팝업 생성 기준이 되는 div */}
                                                        {isPopupOpen && (
                                                            <AddrPopup>
                                                                <AddrWithDaum onClose={closeAddrPopup} onUpdateAddress={handleUpdateAddress} />
                                                            </AddrPopup>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="addr" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">주소</label>
                                            <input type="text" name="addr" id="addr" value={address || ''} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="주소입력" readOnly />
                                        </div>
                                        <div>
                                            <label for="addr2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">나머지 주소</label>
                                            <input type="text" name="addr2" id="addr2" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="나머지 주소입력"/>
                                        </div>
                                    </div>
                                )}
                                {/* 체크박스 */}
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input ref={termsCheckboxRef} id="terms" type="checkbox" />
                                    </div>
                                    <label htmlFor="terms" className="ml-3 text-sm font-light text-gray-500 dark:text-gray-300">
                                        개인정보 취급방침에 동의합니다
                                    </label>
                                </div>
                                <button type="submit" className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    회원가입
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    이미 계정이 있으신가요? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={moveToLogin}>로그인</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </signInLayout>
    );
}

export default SignIn;