// 불러올 파일 import
import SidebarLayout from "../../layouts/SidebarLayout";
import { Button, Card, CardFooter, IconButton, Input, Tooltip, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { PencilIcon, TrashIcon, ArrowPathIcon, CheckIcon, PlusIcon } from "@heroicons/react/24/solid";
import { allTeam, addTeam, updateTeam, deleteTeam } from "../../api/teamApi";

// 테이블 머리부분에 들어가는 내용
const TABLE_HEAD = ["Team Image", "Team Name", "Actions"];

// 팀페이지 컴포넌트
const TeamPage = () => {
    // 상태관리
    const [teams, setTeams] = useState([]);
    const [add, setAdd] = useState(false);
    const [editId, setEditId] = useState(null);
    const [newTeam, setNewTeam] = useState({ teamName: '', teamImage: '' });
    // 구성 요소가 마운트 해제되거나 효과가 다시 실행되기 전에 구독, 타이머, 이벤트 리스너 등을 정리하여 메모리 누수를 방지
    useEffect(() => {
        fetchTeams();
    }, []);
    // 팀 리스트 불러오기
    const fetchTeams = async () => {
        const response = await allTeam();
        if (response && Array.isArray(response.dtoList)) {
            setTeams(response.dtoList);
        } else {
            console.error('Data is not an array', response);
            setTeams([]);
        }
    }
    // 팀 추가(생성)
    const handleAddTeam = async () => {
        try {
            const data = await addTeam(newTeam);
            setTeams([...teams, data]);
            setAdd(false);
            setNewTeam({teamName: '', teamImage: ''});
            fetchTeams();
        } catch (error) {
            console.log("Failed to add team. Error: " + error.message);
        }
    };
    // 팀정보 수정
    const handleUpdateTeam = async () => {
        const updatedTeam = await updateTeam(editId, newTeam);
        const updatedTeams = teams.map(team => team.teamNo === editId ? { ...team, ...updatedTeam } : team);
        setTeams(updatedTeams);
        setEditId(null);
        setNewTeam({ name: '', teamImage: '' });
        fetchTeams();
    }
    // 팀정보 삭제
    const handleDeleteTeam = async (id) => {
        await deleteTeam(id);
        fetchTeams();
    }
    // 이미지 이름을 가져오는 메서드
    const extractFileNameFromUrl = (url) => {
        if (!url) return "No Image";  // 반환된 "No Image" 는 URL을 찾을 수 없거나 비었을때의 표시
        return url.split('/').pop();  // URL에서 / 기준으로 이미지 이름만 자릅니다
    };
    // 수정하기
    const startEdit = (team) => {
        setEditId(team.teamNo);
        setNewTeam({ teamName: team.teamName, teamImage: team.teamImage });
    };
    // 팀 정보 입력
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'teamImage' && files.length > 0) {
            const file = files[0];
            console.log("File selected:", file.name);
            setNewTeam(prev => ({ ...prev, teamImage: file.name }));
        } else {
            setNewTeam(prev => ({ ...prev, [name]: value }));
        }
    };
    // 수정취소
    const cancelEdit = () => {
        setEditId(null);
        setNewTeam({ teamName: '', teamImage: '' });
    }
    // 화면에서 보여질 HTML
    return (
        <SidebarLayout>
            <div>
                <Card>
                    <table>
                        <thead className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        <tr>
                            {TABLE_HEAD.map(head => ( // 위의 변수에 저장된 테이블 헤드의 정보를 불러옴
                                <td key={head}><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">{head}</Typography></td>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {teams.map(team => ( // 서버에서 팀 정보를 불러옴
                            <tr key={team.teamNo}>
                                <td className={"col-start-1 col-end-3"}>
                                    {editId === team.teamNo ? (
                                        // <DropFiles onFileDrop={(img) => handleFileDrop(img)} />
                                        <input type="file" name="teamImage" onChange={handleInputChange}/>
                                    ) : (
                                        <img
                                            src={team.teamImage || "/img/no-image.png"}
                                            alt={extractFileNameFromUrl(team.teamImage) || "이미지없음"}
                                            className={"w-24"}
                                        />
                                    )}
                                </td>
                                <td className={"col-start-3 col-end-10"}>
                                    {editId === team.teamNo ? (
                                        <Input value={newTeam.teamName} onChange={(e) => setNewTeam({ ...newTeam, teamName: e.target.value })} />
                                    ) : (
                                        <Typography>{team.teamName}</Typography>
                                    )}
                                </td>
                                <td className={"col-start-10 col-end-12"}>
                                    <Tooltip content={editId === team.teamNo ? "Save Changes" : "Edit Team"}>
                                        <IconButton variant="text" onClick={() => editId === team.teamNo ? handleUpdateTeam() : startEdit(team)}>
                                            {editId === team.teamNo ? <CheckIcon className="h-4 w-4" /> : <PencilIcon className="h-4 w-4" />}
                                        </IconButton>
                                    </Tooltip>
                                    {editId === team.teamNo && (
                                        <Tooltip content="Cancel">
                                            <IconButton variant="text" onClick={cancelEdit}>
                                                <ArrowPathIcon className="h-4 w-4" />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                    <Tooltip content="Remove Team">
                                        <IconButton variant="text" onClick={() => handleDeleteTeam(team.teamNo)}>
                                            <TrashIcon className="h-4 w-4" />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        ))}
                        {/*추가 버튼을 눌렀을때 tr 생성 */}
                        {add && (
                            <tr>
                                <td>
                                    <input type="file" name="teamImage" onChange={handleInputChange}/>
                                </td>
                                <td>
                                    <Input value={newTeam.teamName} onChange={(e) => handleInputChange({ target: { name: 'teamName', value: e.target.value } })} />
                                </td>
                                <td>
                                    <IconButton onClick={handleAddTeam}>
                                        <CheckIcon className="h-4 w-4"/>
                                    </IconButton>
                                </td>
                            </tr>
                            // <tr>
                            //     <td><DropFiles value={newTeam.teamImage} onFileDrop={handleFileDrop} onChange={handleInputChange}/></td>
                            //     <td><Input value={newTeam.teamName} onChange={handleInputChange} /></td>
                            //     <td>
                            //         <IconButton onClick={handleAddTeam}><CheckIcon className="h-4 w-4"/></IconButton>
                            //     </td>
                            // </tr>
                        )}
                        </tbody>
                    </table>
                    <CardFooter className="flex items-end justify-between border-t border-blue-gray-50 p-4">
                        <IconButton variant="text" onClick={() => setAdd(!add)}>
                            <PlusIcon className="h-4 w-4"/>
                        </IconButton>
                    </CardFooter>
                </Card>
            </div>
        </SidebarLayout>
    );
}

export default TeamPage;