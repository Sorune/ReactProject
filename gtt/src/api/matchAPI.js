import axios from "axios";
import { API_SERVER_HOST } from "./filesApi";

const prefix = `${API_SERVER_HOST}/api/lol`;

export const getTournament = async (tournamentId) => {
    try {
        const response = await axios.get(`${prefix}/tournament/${tournamentId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tournament data:", error);
        throw error; // 에러를 다시 throw 하여 호출자가 처리할 수 있도록 함
    }
}