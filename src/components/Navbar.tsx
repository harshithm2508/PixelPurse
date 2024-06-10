import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { UserLoggedIn } from "../state/atoms/AuthenState";
import { useRecoilState } from "recoil";

function Navbar(){

    const navigate = useNavigate();
    const [ loggedIn, setLoggedIn] = useRecoilState(UserLoggedIn);
    

    return(
        <div className="h-20 flex w-full items-center pl-5 sm:pl-24 pr-10 sm:pr-40 justify-between shadow-lg shadow-blue-100">
            <div className=" font-medium text-2xl text-blue-700 cursor-pointer" onClick={()=>{loggedIn ? navigate('/dashboard') : navigate('/')}}>PixelPurse</div>
            {(!loggedIn) ? <LoggedOutNavbar/> : <LoggedInNavbar/>}
        </div>      
    )
}

function LoggedOutNavbar(){
    const navigate = useNavigate();
    return(
        <div className="flex gap-6">
            <Button text="Login" onClickFunc={()=>{navigate('/login');}} bgColor="bg-white" color="text-black" visibility={false} border="border-blue-500  rounded-md"/>
            <Button text="Sign Up" onClickFunc={()=>{navigate('/signup');}} bgColor="bg-blue-500" color="text-white" visibility={true} border="border-blue-500  rounded-md"/>
        </div>
    )
}

function LoggedInNavbar(){
    const navigate = useNavigate();
    return(
        <div className="flex gap-6">
            <Button text="Home" onClickFunc={()=>{navigate('/dashboard');}} bgColor="bg-white" color="text-black" visibility={false} border="border-white"/>
            <Button text="Wallet" onClickFunc={()=>{navigate('/wallet');}} bgColor="bg-white" color="text-black" visibility={true} border="border-white"/>
            <Button text="My Profile" onClickFunc={()=>{navigate('/profile');}} bgColor="bg-white" color="text-black" visibility={true} border="border-white"/>
        </div>
    )
}

export default Navbar;