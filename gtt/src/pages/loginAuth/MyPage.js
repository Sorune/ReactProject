import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AddrWithDaum from './AddrWithDaum';
import {Button, IconButton, Typography, AccordionHeader, AccordionBody, Accordion} from '@material-tailwind/react';
import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import useUserAuth from "../../hooks/useUserAuth";
import {join} from "../../api/joinApi"
import {getMember} from "../../api/memberApi";

const initState = {
    userId : '',
    password : '',
    nick : '',
    phone : '',
    email : '',
    birth : null,
    address : '',
    addrSub: '',
    zoneCode : '',
}

const MyPage = (num) => {
    const navigate = useNavigate();
    const [modalOpen, modalSetOpen]  = React.useState(false);
    const [termsChecked, setTermsChecked] = useState(false);

    // 1. 이페이지에서만 값을 가지고 있을 것이므로 여기에 state작성
    //      변수         메서드
    const [userId, setUserId] = useState('');       // id
    const [password, setPassword] = useState('');               // pw
    const [confirmPw, setConfirmPw] = useState(''); // confirmPw
    const [nick, setNick] = useState('');           // nick
    const [phone, setPhone] = useState('');         // phone
    const [email, setEmail] = useState('');         // email
    const [birth, setBirth] = useState('');         // birth
    const [address, setAddress] = useState('');     // address
    const [addrSub, setAddrSub] = useState('');     // addrSub
    const [zoneCode, setZoneCode] = useState('');   // zoneCode
    const [member, setMember] = useState(initState);
    // 2. useUserAuth 에서 리턴한 메서드
    // const { checkId, checkPw, checkNick, formatPhoneNumber, validatePhoneNumber} = useUserAuth();
    const { checkPw, formatPhoneNumber, validatePhoneNumber} = useUserAuth();
    // 회원가입
    const {joinMember} = useUserAuth();
    // 추가정보작성 아코디언 이벤트
    const [detail, setDetail] = React.useState(0);
    const detailOpen = (value) => setDetail(detail === value ? 0 : value);
    // 머트리얼 모달 동작 메서드
    const modalHandleOpen = () => modalSetOpen(true);
    const modalHandleClose = () => modalSetOpen(false);
    // 주소 검색 후 결과 값을 반환하는 메서드
    const handleUpdateAddress = (fullAddress, zoneCode) => {
        setAddress(fullAddress);
        setZoneCode(zoneCode);
    };
    console.log(userId, password, phone, nick, email, birth, address, addrSub, zoneCode)
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

    useEffect(() => {
        getMember(num).then(data => {
            console.log(data)
            setMember(data)
        })
    }, []);

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to={"/"} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        GTT
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                MyPage
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e)=>join({userId:userId, password:password, phone:phone, nick:nick, email:email, birth:birth, address:address, addrSub:addrSub, zoneCode:zoneCode})}>
                                <div>
                                    {/* ID */}
                                    <label htmlFor="userId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID 입력</label>
                                    {/*<input name="userId" value={userId} onChange={(e) => setUserId(e.target.value)} onBlur={checkId} type="text" id="userId" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="아이디를 입력하세요" />*/}
                                    {/*<input name="userId" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} onBlur={() => checkId(userId)} type="text" id="userId" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="아이디를 입력하세요" />*/}
                                    <input name="userId" type="text" value={member.userId}type="text" id="userId" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PW 입력</label>
                                    <input
                                        name="password"
                                        value={member.password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirmPw" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PW 입력 확인</label>
                                    <input
                                        name="confirmPw"
                                        value={confirmPw}
                                        onChange={(e) => setConfirmPw(e.target.value)}
                                        onBlur={()=>checkPw(password,confirmPw)}
                                        type="password"
                                        id="confirm-password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <Typography as="label" htmlFor="nickname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">닉네임</Typography>
                                    {/* nick */}
                                    {/*<input name="nickname" value={nick} onChange={(e) => setNick(e.target.value)} onBlur={checkNick} type="text"id="nick" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="닉네임을 입력하세요"/>*/}
                                    <input name="nickname" value={member.nick} onChange={(e) => setNick(e.target.value)} type="text"id="nick" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                    <Accordion open={detail === 1}>
                                        <AccordionHeader onClick={() => detailOpen(1)}>
                                                추가정보작성
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <div>
                                                <Typography as="label" htmlFor="birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">생년월일</Typography>
                                                {/* birth */}
                                                <input type={"date"} value={member.birth} name="birth" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                            </div>
                                            <div>
                                                <label htmlFor="zoneCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">우편번호</label>
                                                <div className="grid grid-cols-12 gap-5">
                                                    <div className='col-span-10'>
                                                        {/* zoneCode */}
                                                        <input type="text" value={member.zoneCode || ''} name="zoneCode" onChange={setZoneCode} id="zoneCode" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly />
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
                                                <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">주소</label>
                                                {/* address */}
                                                <input type="text" name="address" id="address" onChange={setAddress} value={member.address || ''} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly />
                                            </div>
                                            <div>
                                                <label htmlFor="addrSub" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">나머지 주소</label>
                                                {/* addrSub */}
                                                <input type="text" name="addrSub" id="addrSub"  value={member.addrSub} onChange={(e) => setAddrSub(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
                                                {/* phone */}
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={member.phone}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    readOnly
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                                                {/* email */}
                                                <input readOnly type="text" name="email" id="email" value={member.email} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                            </div>
                                        </AccordionBody>
                                    </Accordion>
                                </div>
                                {/* 체크박스 */}
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input checked={termsChecked} onChange={(e) => setTermsChecked(e.target.checked)} id="terms" type="checkbox" />
                                    </div>
                                    <label htmlFor="terms" className="ml-3 text-sm font-light text-gray-500 dark:text-gray-300">
                                        <Link to={"#"} className="underline text-blue-500">개인정보 취급방침</Link>에 동의합니다
                                    </label>
                                </div>
                                <button type="submit" className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    회원가입
                                </button>
                                <p className='ml-3 text-sm font-light text-gray-500 dark:text-gray-300'>
                                    이미 계정이 있으신가요? &nbsp;
                                    <Link to={"/login"} className="text-primary" data-value="login">로그인</Link>
                                    <br />
                                    메인화면으로 돌아갈까요? &nbsp;
                                    <Link to={"/"} className="text-primary" data-value="home">홈으로</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MyPage;
