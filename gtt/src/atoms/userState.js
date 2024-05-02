import {atom} from "recoil";
import {getCookie} from "../utill/cookieUtill";


const initUserState = {
    num:0,
    userId:"",
    nick:"Anonymous",
    zoneCode: "",
    address:"",
    addrSub:"",
    email:"",
    phone: "",
    birth:"",
    roles:["ROLE_Anonymous"],
}

const loadUserCookie = ()=>{
    const userInfo = getCookie("user")

    return userInfo
}

export const userState = atom({
    key:"userState",
    default:loadUserCookie()||initUserState
})
