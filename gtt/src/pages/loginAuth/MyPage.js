import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, Typography, Input, Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import { updateMember } from "../../api/memberApi";
import { useRecoilState } from "recoil";
import {loadUserCookie, userState} from "../../atoms/userState";
import SidebarLayout from "../../layouts/SidebarLayout";
import AddrWithDaum from './AddrWithDaum';

const MyPage = () => {
    const navigate = useNavigate();
    const [modalOpen, modalSetOpen] = useState(false);
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const [formData, setFormData] = useState({
        num: '',
        userId: '',
        password: '',
        nick: '',
        birth: '',
        address: '',
        zoneCode: '',
        addrSub: '',
    });



    useEffect(() => {
        if (!userInfo || userInfo.length === 0 || !userInfo[0]) {
            alert("유효한 사용자 정보가 없습니다. 로그인 페이지로 이동합니다.");
            navigate('/login');
        } else {
            setFormData({
                num: userInfo[0].num,
                userId: userInfo[0].userId,
                password: userInfo[0].password,
                nick: userInfo[0].nick,
                birth: userInfo[0].birth,
                address: userInfo[0].address,
                zoneCode: userInfo[0].zoneCode,
                addrSub: userInfo[0].addrSub || '',
            });
        }
    }, [userInfo, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleMemUpdate = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (!formData.num || !formData.userId || !formData.nick || formData.password || !formData.birth || !formData.address || !formData.zoneCode) {
            alert('모든 필드를 채워주세요.');
            return;
        }
        try {
            const result = await updateMember(formData.num, formData.userId, formData.password, formData.nick, formData.birth, formData.zoneCode, formData.address, formData.addrSub );
            if (result.data) {
                alert("회원 정보가 성공적으로 수정되었습니다.");
                navigate('/');
            } else {
                throw new Error("응답 데이터가 없습니다.");
            }
        } catch (error) {
            console.error("회원 수정 과정에서 오류 발생:", error);
            alert("회원 수정에 실패했습니다. 관리자를 호출하세요");
        }
    };

    return (
        <SidebarLayout>
            <h1 className="text-xl text-center mb-5 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                MyPage
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleMemUpdate}>
                {/* Nickname Input */}
                <div>
                    <Typography as="label" htmlFor="nickname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">닉네임</Typography>
                    <Input
                        name="nick"
                        label="닉네임"
                        type="text"
                        value={formData.nick}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="닉네임을 입력하세요"
                    />
                </div>
                {/* 생년월일 Input */}
                <div>
                    <Typography as="label" htmlFor="birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">생년월일</Typography>
                    <input type="date" name="birth" value={formData.birth} onChange={handleInputChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                {/* Address Input */}
                <div>
                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">주소</label>
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} readOnly
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                {/* 이제 이 방식을 다른 입력 필드에도 적용하면 됩니다. */}

                <div className="flex items-center justify-center gap-2">
                    {/*<button type="submit" className="text-white bg-gradient-to-r from-red-800 to-red-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-32 h-10" onClick={() => handleReset}>*/}
                    {/*    리셋*/}
                    {/*</button>*/}
                    <button type="submit"
                            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-32 h-10">
                        수정 확인
                    </button>
                    {/*<button type="button" className="text-white bg-gradient-to-r from-green-800 to-green-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-32 h-10" onClick={() => idAndPwModify()}>*/}
                    {/*    ID/PW 변경*/}
                    {/*</button>*/}
                </div>
            </form>
        </SidebarLayout>
    );
};

export default MyPage;
