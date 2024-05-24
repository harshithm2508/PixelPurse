import { atom } from "recoil";

export const UserLogin = atom<boolean>({
    key : "UserLogin",
    default : false
})