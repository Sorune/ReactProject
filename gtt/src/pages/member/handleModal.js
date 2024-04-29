// MemberDetailsDialog.js
import {Button, Dialog} from "@material-tailwind/react";

export const MemberDetailsDialog = ({ open, currentMember, onClose }) => {
    if (!open) return null;
    return (
        <Dialog open={open} onClose={onClose}>
            <Dialog.Header>회원 상세정보</Dialog.Header>
            <Dialog.Body>
                {currentMember && (
                    <div>
                        <p>ID: {currentMember.userId}</p>
                        <p>Nickname: {currentMember.nick}</p>
                        // 추가 정보들
                    </div>
                )}
            </Dialog.Body>
            <Dialog.Footer>
                <Button onClick={onClose}>닫기</Button>
            </Dialog.Footer>
        </Dialog>
    );
};

// ConfirmDeleteDialog.js
export const ConfirmDeleteDialog = ({ open, onDelete, onClose }) => {
    if (!open) return null;
    return (
        <Dialog open={open} onClose={onClose}>
            <Dialog.Header>삭제 확인</Dialog.Header>
            <Dialog.Body>
                정말로 삭제하시겠습니까?
            </Dialog.Body>
            <Dialog.Footer>
                <Button onClick={onDelete}>삭제</Button>
                <Button onClick={onClose}>취소</Button>
            </Dialog.Footer>
        </Dialog>
    );
};

// EditMemberDialog.js
export const EditMemberDialog = ({ open, currentMember, onSave, onClose }) => {
    if (!open) return null;
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            userId: e.target.userId.value,
            // 기타 필드
        };
        onSave(formData);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <Dialog.Header>회원 정보 수정</Dialog.Header>
            <Dialog.Body>
                <form onSubmit={handleSubmit}>
                    <input name="userId" defaultValue={currentMember?.userId} required />
                    // 추가 입력 필드
                    <Button type="submit">저장</Button>
                </form>
            </Dialog.Body>
            <Dialog.Footer>
                <Button onClick={onClose}>닫기</Button>
            </Dialog.Footer>
        </Dialog>
    );
};