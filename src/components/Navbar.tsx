import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Navbar(){
    const navigate = useNavigate();


    return(
        <div className="h-20 flex w-full items-center pl-5 sm:pl-24 pr-10 sm:pr-40 justify-between">
            <div className=" font-medium text-2xl text-blue-700">PixelPurse</div>
            <div className="flex gap-6">
                <Button text="Login" onClickFunc={()=>{navigate('/login');}} bgColor="bg-white" color="text-black" visibility={false} border="border-blue-500"/>
                <Button text="Sign Up" onClickFunc={()=>{navigate('/signup');}} bgColor="bg-blue-500" color="text-white" visibility={true} border="border-blue-500"/>
            </div>
        </div>      
    )
}

export default Navbar;