import React, { useEffect, useState } from 'react';
import { Button, Card, Typography } from "@material-tailwind/react";
import { memberList, getMember, removeMember, updateMember } from "../../api/memberApi";
import { ConfirmDeleteDialog, EditMemberDialog, MemberDetailsDialog } from "./AdminUserModal";

const MemberList = () => {
    const [modalOpen, setModalOpen] = useState(false); // 모달 열기 상태
    const [deleteModalOpen, setDeleteModalOpen] = useState(false); // 삭제 확인 모달 열기 상태
    const [editModalOpen, setEditModalOpen] = useState(false); // 수정 모달 열기 상태
    const [currentMember, setCurrentMember] = useState(null); // 현재 선택된 회원 정보
    const [members, setMembers] = useState([]); // 회원 목록
    const [memberToDelete, setMemberToDelete] = useState(null); // 삭제할 회원 번호
    const [reloadFlag, setReloadFlag] = useState(false); // 목록 재로드 트리거
    const [activeTab, setActiveTab] = useState(1); // 활성화된 탭

    useEffect(() => {
        const fetchMembers = async () => {
            const response = await memberList();
            setMembers(response?.dtoList || []);
        };
        fetchMembers();
    }, [reloadFlag]);

    const handleMemberClick = async (memberId) => {
        const response = await getMember(memberId);
        if (response?.userId) {
            setCurrentMember(response);
            setModalOpen(true);
        } else {
            console.error('회원 정보 가져오기 실패', response);
        }
    };

    const openDeleteModal = (memberId) => {
        setMemberToDelete(memberId);
        setDeleteModalOpen(true);
    };

    const handleDeleteMember = async () => {
        const response = await removeMember(memberToDelete);
        if (response.result === "SUCCESS") {
            setReloadFlag(!reloadFlag);
            alert('회원 삭제 성공');
        } else {
            alert('회원 삭제 실패');
        }
        setDeleteModalOpen(false);
    };

    const openEditModal = (member) => {
        setCurrentMember(member);
        setEditModalOpen(true);
    };

    const handleEditMember = async (formData) => {
        const success = await updateMember(currentMember.num, formData);
        if (success) {
            setReloadFlag(!reloadFlag);
            alert('회원 정보 수정 성공');
        }
        setEditModalOpen(false);
    };

    const renderTableHead = () => ["ID", "닉네임", "가입일", "수정일", "삭제여부", "수정여부"].map((head) => (
        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                {head}
            </Typography>
        </th>
    ));

    const renderTableRows = () => members.map((member, index) => (
        <tr key={index} className="border-b border-blue-gray-50 p-4">
            <td onClick={() => handleMemberClick(member.num)}>{member.userId}</td>
            {activeTab === 1 && <td>{member.nick}</td>}
            {activeTab === 2 && <td>{member.joinDate}</td>}
            {activeTab === 3 && <td>{member.editDate}</td>}
            <td><Button onClick={() => openDeleteModal(member.num)}>삭제</Button></td>
            <td><Button color='orange' variant="gradient" onClick={() => openEditModal(member)}>수정</Button></td>
        </tr>
    ));

    const renderTabMenu = () => (
        <div className="flex border-b">
            <button
                className={`p-4 ${activeTab === 1 ? 'text-blue-500 border-blue-500' : 'text-gray-500 border-transparent'} border-b-2`}
                onClick={() => setActiveTab(1)}>
                전체 회원
            </button>
            <button
                className={`p-4 ${activeTab === 2 ? 'text-blue-500 border-blue-500' : 'text-gray-500 border-transparent'} border-b-2`}
                onClick={() => setActiveTab(2)}>
                활동 회원
            </button>
            <button
                className={`p-4 ${activeTab === 3 ? 'text-blue-500 border-blue-500' : 'text-gray-500 border-transparent'} border-b-2`}
                onClick={() => setActiveTab(3)}>
                비활동 회원
            </button>
        </div>
    );

    return (
        <div>
            <Card className="w-full overflow-hidden">
                {renderTabMenu()}
                <table className="min-w-max w-full text-left">
                    <thead className="sticky top-0 bg-white">
                    {renderTableHead()}
                    </thead>
                    <tbody className="h-96 overflow-y-auto">
                    {renderTableRows()}
                    </tbody>
                </table>
            </Card>
            <MemberDetailsDialog open={modalOpen} currentMember={currentMember} onClose={() => setModalOpen(false)}/>
            <ConfirmDeleteDialog open={deleteModalOpen} onDelete={handleDeleteMember} onClose={() => setDeleteModalOpen(false)}/>
            <EditMemberDialog open={editModalOpen} currentMember={currentMember} onSave={handleEditMember} onClose={() => setEditModalOpen(false)}/>
        </div>
    );
}

export default MemberList;