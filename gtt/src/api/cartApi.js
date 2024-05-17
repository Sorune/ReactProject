import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";
import jwtAxios from "../utill/jwtUtill";

const prefix = `${API_SERVER_HOST}/api/cart`

export const pay = async (cart) => {
    try {
        const response = await jwtAxios.post(`${prefix}/`, cart);
        return response.data;
    } catch (error) {
        console.error("결제 요청 중 오류 발생:", error);
        throw error; // 오류를 호출한 쪽으로 다시 던짐
    }
};