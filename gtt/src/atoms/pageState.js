import {atom} from "recoil";
const initSignInState = {
    username:'',
    email:''
}
const initPageState = {
    page:1,
    size:10,
    keyword:'',
    type:'',
    currentPage:1,
    totalPage:1,
}
export const signinState = atom({
    key:'signinState',
    default: initSignInState
})

export const pageState = atom({
    key:'pageState',
    default:initPageState
})

export const serverName = atom({
    key:'serverState',
    default:'http://localhost:8080/'
})
