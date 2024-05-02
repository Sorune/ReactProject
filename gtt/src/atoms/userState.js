import {atom} from "recoil";


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

export const userState = atom({
    key:"userState",
    default:initUserState
})
