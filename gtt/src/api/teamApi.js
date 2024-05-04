import axios from "axios";
import { API_SERVER_HOST } from "./filesApi";

const prefix = `${API_SERVER_HOST}/api/team`;

// 팀 목록 출력
export const allTeam = async () => {
    const response = await axios.get(`${prefix}/list`);
    return response.data;
}

// 팀 추가
export const addTeam = async (team) => {
    const response = await axios.post(`${prefix}/`, team);
    return response.data;
}

// 팀 수정
export const updateTeam = async (id, team) => {
    const response = await axios.put(`${prefix}/${id}`, team);
    return response.data;
}

// 팀 삭제
export const deleteTeam = async (id) => {
    const response = await axios.delete(`${prefix}/${id}`);
    return response.data;
}