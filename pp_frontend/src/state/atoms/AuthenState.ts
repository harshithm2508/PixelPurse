import { atom } from "recoil";

export const UserLoggedIn = atom<boolean>({
    key : "UserLoggedIn",
    default : true
})