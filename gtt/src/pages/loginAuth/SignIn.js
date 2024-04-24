import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AddrWithDaum from './AddrWithDaum';
import DatePicker from "../../components/common/DatePicker";
import { Collapse, Button, IconButton, Card, Typography, CardBody } from '@material-tailwind/react';
import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import userEvent from "@testing-library/user-event";
// validation.js 제외 / 리액트 훅 규칙에 따라서 사용할 훅의 네임을 useInput으로 새로운 훅을 생성
import { useConfirmID, useConfirmNick, usePasswordMatch, useCheckedTerms } from '../../hooks/useInput';

const SignIn = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState('');
    const [zoneCode, setZoneCode] = useState('');
    const [modalOpen, modalSetOpen]  = React.useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    // useInput에서 리턴한 값
    const [inputID, inputIdChange, idMatch, clearInput] = useConfirmID('');
    const [inputNick, inputNickChange, nickMatch, clearNick] = useConfirmNick('');
    const [inputPass, inputPassChange, inputConfirmPass, inputConfirmPassChange, passMatch, clearPassword] = usePasswordMatch("", "");
    // const [termsChecked, checkeChange] = useCheckedTerms(false);

    // useInput에서 리턴한 값을 기준으로 메서드 실행 - id검증
    const idCompareResult = () => {
        if(idMatch) {
            alert("이미 사용중인 아이디 입니다.");
            clearInput();
        }
    }
    // 리턴한 값을 기준으로 메서드 실행 - 닉네임검증
    const nickCompareResult = () => {
        if(nickMatch) {
            alert("이미 사용중인 닉네임 입니다.");
            clearNick();
        }
    }
    // 리턴한 값을 기준으로 메서드 실행 - 비밀번호검증
    const passCompareResult = () => {
        if(!passMatch) {
            alert("PW 입력 과 PW 입력확인이 일치하지 않습니다.");
            clearPassword();
        }
    }
    // 머트리얼 콜랩스 동작메서드 - toggle 
    const toggleOpen = () => setOpen((cur) => !cur);
    // 머트리얼 모달 동작 메서드
    const modalHandleOpen = () => modalSetOpen(true);
    const modalHandleClose = () => modalSetOpen(false);
    // 주소 검색 후 결과 값을 반환하는 메서드
    const handleUpdateAddress = (fullAddress, zoneCode) => {
        setAddress(fullAddress);
        setZoneCode(zoneCode);
    };
    // 로그인 페이지로 가는 메서드 - 버튼 이벤트 처리용
    const moveToLink = (e) => {
        // 클릭한 요소에서 'data-value' 속성 값을 가져와서 목적지 변수에 저장
        const destination = e.target.dataset.value;
        // 목적지 값에 따라 다르게 처리 "login"이면 로그인 페이지로 이동하고
        if (destination === "login") {
            navigate("/login");
        // "home"이면 홈페이지(보통 "/"로 표시됨)로 이동
        } else if (destination === "home") {
            navigate("/");
        }
    };
    // 폼 제출 메서드
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!termsChecked) {
            alert("개인정보 취급방침에 동의해야 합니다.");
            return;
        } else {
            alert("회원 가입이 완료되었습니다! 메인화면으로 이동합니다.");
            //navigate("/home");
        }
    };

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        GTT
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                JOIN
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleFormSubmit}>
                                <div>
                                    <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID 입력</label>
                                    <input name="id" value={inputID} onChange={inputIdChange} onBlur={idCompareResult} type="text" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="아이디를 입력하세요" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PW 입력</label>
                                    <input name="password" value={inputPass} onChange={inputPassChange} type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PW 입력 확인</label>
                                    <input name="password2" value={inputConfirmPass} onChange={inputConfirmPassChange} onBlur={passCompareResult} type="password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label htmlFor="nickname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">닉네임</label>
                                    <input name="nickname" value={inputNick} onChange={inputNickChange} onBlur={nickCompareResult} type="text" id="nick" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="닉네임을 입력하세요"/>
                                </div>

                                <div>
                                    <Button onClick = { toggleOpen }>
                                        추가정보작성
                                    </Button>
                                    <Collapse open = {open}>
                                        <Card className="my-4 mx-auto w-12/12">
                                            <CardBody>
                                                <div>
                                                    <Typography as="label" htmlFor="birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">생년월일</Typography>
                                                    <DatePicker name="birth"/>
                                                </div>
                                                <div>
                                                    <label htmlFor="addrNum" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">우편번호</label>
                                                    <div className="grid grid-cols-12 gap-5">
                                                        <div className='col-span-10'>
                                                            <input type="text" name="addrNum" id="addrNum" value={zoneCode || ''} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly />
                                                        </div>
                                                        <div className='col-span-2'>
                                                            <IconButton onClick = {modalHandleOpen} variant="gradient" title='주소검색'>
                                                                <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                                                                </svg>
                                                            </IconButton>
                                                            <Dialog open={modalOpen} handler={modalHandleClose}>
                                                                <DialogHeader>
                                                                    <div className="grid grid-cols-12 gap-5 w-full">
                                                                        <div className='col-span-10 text-center'>
                                                                            주소찾기
                                                                        </div>
                                                                        <div className='col-span-2'>
                                                                            <Button color='red' onClick={modalHandleClose} variant="gradient" title='창닫기'>
                                                                                X
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                </DialogHeader>
                                                                <DialogBody>
                                                                    <AddrWithDaum onClose={modalHandleClose} onUpdateAddress={handleUpdateAddress} />
                                                                </DialogBody>
                                                            </Dialog>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="addr" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">주소</label>
                                                    <input type="text" name="addr" id="addr" value={address || ''} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="주소입력" readOnly />
                                                </div>
                                                <div>
                                                    <label htmlFor="addr2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">나머지 주소</label>
                                                    <input type="text" name="addr2" id="addr2" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="나머지 주소입력"/>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                                {/* 체크박스 */}
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input checked={termsChecked} onChange={(e) => setTermsChecked(e.target.checked)} id="terms" type="checkbox" />
                                    </div>
                                    <label htmlFor="terms" className="ml-3 text-sm font-light text-gray-500 dark:text-gray-300">
                                        개인정보 취급방침에 동의합니다
                                    </label>
                                </div>
                                <button type="submit" className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    회원가입
                                </button>
                                <p className='ml-3 text-sm font-light text-gray-500 dark:text-gray-300'>
                                    이미 계정이 있으신가요? &nbsp;
                                    <a href="#none" className="text-primary" data-value="login" onClick={moveToLink}>로그인</a>
                                    <br />
                                    메인화면으로 돌아갈까요? &nbsp;
                                    <a href="#none" className="text-primary" data-value="home" onClick={moveToLink}>홈으로</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignIn;