import {  useRecoilValue } from "recoil"
import { userData } from "../state/atoms/UserInfo"


export default function Profile(){

    const UserData = useRecoilValue(userData);

    return(
        <div className=" flex justify-center items-center w-full h-full bg-red-200 h-screen-minus-20">
            Hello {UserData.firstName}
        </div>
    )
}