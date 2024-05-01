import {atom} from "recoil";


const initUserState = {
    num:0,
    userId:"",
    nick:"",
    zoneCode: "",
    address:"",
    addrSub:"",
    email:"",
    phone: "",
    birth:"",
}

export const userState = atom({
    key:"userState",
    default:initUserState
})