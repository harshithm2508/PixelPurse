import Input from "../components/Input"
import Button from "../components/Button"
import { Link } from "react-router-dom"

export default function Login(){
    return(
        <div className="w-full h-screen-minus-20 flex justify-center">
            <div className="sm:w-1/2 min-w-0.5 h-1/2 mt-14 sm:mt-20">
                <div className=" text-2xl font-semibold">Welcome to <span className=" text-blue-700">PixelPurse</span></div>
                <div className="text-md font-medium text-gray-500">Log into your account using email or username</div>
                <div className="mt-8 w-full">
                    <div className="text-md font-semibold">Email or Username</div>
                    <Input inputType="text" placeholder="example@mail.com" width="w-full sm:w-9/12 md:w-8/12" height=" h-10" bgColor="bg-gray-100"/>
                </div>

                <div className="mt-8 w-full">
                    <div className="text-md font-semibold">Password</div>
                    <Input inputType="password" placeholder="" width="w-full sm:w-9/12 md:w-8/12" height=" h-10" bgColor="bg-gray-100"/>
                </div>
                <div className="mt-42font-semibold text-gray-500 mb-4">Forgot your password ?</div>
                <Button text="Login" bgColor="bg-blue-700" color="text-white" width="w-full sm:w-9/12 md:w-8/12"/>
                <div className="text-center">OR</div>
                <Button text="Connect with Google" bgColor="bg-gray-200" color="text-gray-900" width="w-full sm:w-9/12 md:w-8/12"/>
                <div className="mt-4 font-semibold text-center text-gray-500 mb-4">Don't have an account ? <Link className=" text-blue-800" to={'/signup'}>Sign Up</Link></div>
                
            </div>
        </div>
    )
}