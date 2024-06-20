import { atom } from "recoil";

export type UserData = {
  userName: string;
  firstName: string;
  lastName: string;
};

export const userData = atom<UserData>({
  key: "user_data",
  default: {
    userName: "",
    firstName: "Harshith",
    lastName: "",
  },
});
