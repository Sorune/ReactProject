import axios from "axios";
import {API_SERVER_HOST} from "./filesApi";
import jwtAxios from "../utill/jwtUtill";

const prefix = `${API_SERVER_HOST}/api/cart`

export const pay = async (cart)=>{
    const response = jwtAxios.post(`${prefix}/`, cart);
    return response.data;
}