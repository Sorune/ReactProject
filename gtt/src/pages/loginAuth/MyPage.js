import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AddrWithDaum from './AddrWithDaum';
import {Button, IconButton, Typography, AccordionHeader, AccordionBody, Accordion} from '@material-tailwind/react';
import {Dialog, DialogHeader, DialogBody} from '@material-tailwind/react';
import {updateMember} from "../../api/memberApi";
import {useRecoilValue} from "recoil";
import {userState} from "../../atoms/userState";
import SidebarLayout from "../../layouts/SidebarLayout";


const MyPage = () => {
    const navigate = useNavigate();
    const [modalOpen, modalSetOpen] = React.useState(false);
    const userInfo = useRecoilValue(userState)
    // 1. 이페이지에서만 값을 가지고 있을 것이므로 여기에 state작성
    //      변수         메서드
    const [num, setNum] = useState(userInfo ? userInfo.num : '');                           // num
    const [userId, setUserId] = useState(userInfo ? userInfo.userId : '');      // id
    const [password, setPassword] = useState(userInfo ? userInfo.password : '');            // pw
    const [nick, setNick] = useState(userInfo ? userInfo.nick : '');            // nick
    const [phone, setPhone] = useState(userInfo ? userInfo.phone : '');         // phone
    const [email, setEmail] = useState(userInfo ? userInfo.email : '');         // email
    const [birth, setBirth] = useState(userInfo ? userInfo.birth : '');         // birth
    const [address, setAddress] = useState(userInfo ? userInfo.address : '');               // address
    const [addrSub, setAddrSub] = useState(userInfo ? userInfo.addrSub : '');   // addrSub
    const [zoneCode, setZoneCode] = useState(userInfo ? userInfo.zoneCode : '');// zoneCode

    // 머트리얼 모달 동작 메서드
    const modalHandleOpen = () => modalSetOpen(true);
    const modalHandleClose = () => modalSetOpen(false);
    // 주소 검색 후 결과 값을 반환하는 메서드
    const handleUpdateAddress = (fullAddress, zoneCode) => {
        setAddress(fullAddress);
        setZoneCode(zoneCode);
    };
    console.log(num, userId, password, phone, nick, email, birth, address, addrSub, zoneCode)
    // 로그인 페이지로 가는 메서드 - 버튼 이벤트 처리용

    const handleMemUpdate = ({num, userId, nick, birth, zoneCode, address, addrSub}) => {
        console.log(num, userId, nick, birth, zoneCode, address, addrSub);

        updateMember(num, userId, nick, birth, zoneCode, address, addrSub).then(data => {
            navigate("/");
        });
    };

    const handleReset = () => {
        window.location.reload();
    }

    useEffect(() => {
        // 페이지 진입 시 num 값이 0이거나 null이면 다른 페이지로 이동
        if (num === 0 || num === null) {
            alert("로그인 페이지로 이동합니다.")
            navigate('/login'); // 로그인 페이지로 이동
        }
    }, [userInfo]);

    return (
        <SidebarLayout>
                                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    MyPage
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e) => handleMemUpdate({
                                    num: num,
                                    userId: userId,
                                    password: password,
                                    nick: nick,
                                    birth: birth,
                                    address: address,
                                    addrSub: addrSub,
                                    zoneCode: zoneCode
                                })}>
                                    <div>
                                        {/* ID */}
                                        <label htmlFor="userId"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID
                                            입력</label>
                                        <input name="userId" type="text" value={userId} id="userId"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                    </div>
                                    <div>
                                        <label htmlFor="password"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PW
                                            입력</label>
                                        <input
                                            readOnly
                                            name="password"
                                            value={password}
                                            // onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <Typography as="label" htmlFor="nickname"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">닉네임(o)</Typography>
                                        {/* nick */}
                                        {/*<input name="nickname" value={nick} onChange={(e) => setNick(e.target.value)} onBlur={checkNick} type="text"id="nick" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="닉네임을 입력하세요"/>*/}
                                        <input name="nick" value={nick} onChange={(e) => setNick(e.target.value)}
                                               type="text" id="nick"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                    </div>
                                    <div>
                                        <h1>추가정보확인 (수정)</h1>
                                        <hr/>
                                        <br/>
                                        <div>
                                            <Typography as="label" htmlFor="birth"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">생년월일</Typography>
                                            {/* birth */}
                                            <input readOnly type={"date"} value={birth} name="birth"
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                        </div>
                                        <div>
                                            <label htmlFor="zoneCode"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">우편번호(o)</label>
                                            <div className="grid grid-cols-12 gap-5">
                                                <div className='col-span-10'>
                                                    {/* zoneCode */}
                                                    <input type="text" value={zoneCode || ''} name="zoneCode"
                                                           onChange={setZoneCode} id="zoneCode"
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           readOnly/>
                                                </div>
                                                <div className='col-span-2'>
                                                    <IconButton onClick={modalHandleOpen} variant="gradient"
                                                                title='주소검색'>
                                                        <svg className="w-6 h-6 text-white-800 dark:text-white"
                                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round"
                                                                  strokeWidth="2"
                                                                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                                                        </svg>
                                                    </IconButton>
                                                    <Dialog open={modalOpen} handler={modalHandleClose}>
                                                        <DialogHeader>
                                                            <div className="grid grid-cols-12 gap-5 w-full">
                                                                <div className='col-span-10 text-center'>
                                                                    주소찾기
                                                                </div>
                                                                <div className='col-span-2'>
                                                                    <Button color='red' onClick={modalHandleClose}
                                                                            variant="gradient" title='창닫기'>
                                                                        X
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </DialogHeader>
                                                        <DialogBody>
                                                            <AddrWithDaum onClose={modalHandleClose}
                                                                          onUpdateAddress={handleUpdateAddress}/>
                                                        </DialogBody>
                                                    </Dialog>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="adress"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">주소(o)</label>
                                            {/* address */}
                                            <input type="text" name="address" id="address" onChange={setAddress}
                                                   value={address || ''}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   readOnly/>
                                        </div>
                                        <div>
                                            <label htmlFor="addrSub"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">나머지
                                                주소(o)</label>
                                            {/* addrSub */}
                                            <input type="text" name="addrSub" id="addrSub" value={addrSub}
                                                   onChange={(e) => setAddrSub(e.target.value)}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                        </div>
                                        <div>
                                            <label htmlFor="phone"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
                                            {/* phone */}
                                            <input
                                                type="text"
                                                name="phone"
                                                value={phone}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                                            {/* email */}
                                            <input readOnly type="text" name="email" id="email" value={email}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <button type="submit"
                                                className="text-white bg-gradient-to-r from-red-800 to-red-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-32 h-10"
                                                onClick={() => handleReset}
                                        >
                                            리셋
                                        </button>
                                        <button type="submit"
                                                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-32 h-10">
                                            수정 확인
                                        </button>
                                    </div>
                                </form>
        </SidebarLayout>
    );
}

export default MyPage;
