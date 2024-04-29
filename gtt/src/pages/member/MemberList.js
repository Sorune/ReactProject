import React, { useEffect, useState } from 'react';
import {Button, Card, Typography,} from "@material-tailwind/react";
import { memberList, getMember, removeMember, updateMember } from "../../api/memberApi";
import {ConfirmDeleteDialog, EditMemberDialog, MemberDetailsDialog} from "./handleModal";

const MemberList = () => {
    const [modalOpen, setModalOpen] = useState(false); // 모달 열기 상태
    const [deleteModalOpen, setDeleteModalOpen] = useState(false); // 삭제 확인 모달 열기 상태
    const [editModalOpen, setEditModalOpen] = useState(false); // 수정 모달 열기 상태
    const [currentMember, setCurrentMember] = useState(null); // 현재 선택된 회원 정보
    const [members, setMembers] = useState([]); // 회원 목록
    const [memberToDelete, setMemberToDelete] = useState(null); // 삭제할 회원 번호
    const [reloadFlag, setReloadFlag] = useState(false); // 목록 재로드 트리거

    useEffect(() => {
        const fetchMembers = async () => { // 회원 목록 가져오기
            const response = await memberList();
            setMembers(response?.dtoList || []); // 목록 설정
        };
        fetchMembers();
    }, [reloadFlag]);

    const handleMemberClick = async (memberId) => { // 회원 클릭 처리
        const response = await getMember(memberId);
        if (response?.userId) {
            setCurrentMember(response);
            setModalOpen(true);
        } else {
            console.error('회원 정보 가져오기 실패', response);
        }
    };

    const openDeleteModal = (memberId) => { // 삭제 모달 열기
        setMemberToDelete(memberId);
        setDeleteModalOpen(true);
    };

    const handleDeleteMember = async () => { // 회원 삭제 처리
        const response = await removeMember(memberToDelete);
        if (response.result === "SUCCESS") {
            setReloadFlag(!reloadFlag); // 목록 다시 불러오기
            alert('회원 삭제 성공');
        } else {
            alert('회원 삭제 실패');
        }
        setDeleteModalOpen(false);
    };

    const openEditModal = (member) => { // 수정 모달 열기
        setCurrentMember(member);
        setEditModalOpen(true);
    };

    const handleEditMember = async (formData) => { // 회원 수정 처리
        const success = await updateMember(currentMember.num, formData);
        if (success) {
            setReloadFlag(!reloadFlag); // 목록 다시 불러오기
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
            <td>{member.nick}</td>
            <td>{member.joinDate}</td>
            <td>{member.editDate}</td>
            <td><Button onClick={() => openDeleteModal(member.num)}>삭제</Button></td>
            <td><Button color='orange' variant="gradient" onClick={() => openEditModal(member)}>수정</Button></td>
        </tr>
    ));

    return (
        <div>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>{renderTableHead()}</thead>
                    <tbody>{renderTableRows()}</tbody>
                </table>
            </Card>
            <MemberDetailsDialog open={modalOpen} currentMember={currentMember} onClose={() => setModalOpen(false)}/>
            <ConfirmDeleteDialog open={deleteModalOpen} onDelete={handleDeleteMember} onClose={() => setDeleteModalOpen(false)}/>
            <EditMemberDialog open={editModalOpen} currentMember={currentMember} onSave={handleEditMember} onClose={() => setEditModalOpen(false)}/>
        </div>
    );
}

export default MemberList;