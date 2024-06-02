import Input from "../components/Input"
import Button from "../components/Button"
import { Link } from "react-router-dom"



export default function SignUp(){
    return(
        <div className="w-full h-screen-minus-20 flex justify-center">
            <div className="sm:w-1/2 min-w-0.5 h-1/2 mt-8">
                <div className=" text-2xl font-semibold">Welcome to <span className=" text-blue-700">PixelPurse</span></div>
                <div className="text-md font-medium text-gray-500">Create your <span className="text-blue-700">PixelPurse</span> account</div>

                <div className="mt-4 w-full">
                    <div className="text-md font-semibold">First Name</div>
                    <Input inputType="text" placeholder="John" width="w-full sm:w-9/12 md:w-8/12" height=" h-10" bgColor="bg-gray-100"/>
                </div>

                <div className="mt-4 w-full">
                    <div className="text-md font-semibold">Last Name</div>
                    <Input inputType="text" placeholder="Doe" width="w-full sm:w-9/12 md:w-8/12" height=" h-10" bgColor="bg-gray-100"/>
                </div>

                <div className="mt-4 w-full">
                    <div className="text-md font-semibold">Email or Username</div>
                    <Input inputType="text" placeholder="example@mail.com" width="w-full sm:w-9/12 md:w-8/12" height=" h-10" bgColor="bg-gray-100"/>
                </div>

                <div className="mt-4 w-full">
                    <div className="text-md font-semibold">Password</div>
                    <Input inputType="password" placeholder="" width="w-full sm:w-9/12 md:w-8/12" height=" h-10" bgColor="bg-gray-100"/>
                </div>
                <Button text="Sign Up" margin="mt-6" bgColor="bg-blue-700" color="text-white" width="w-full sm:w-9/12 md:w-8/12"/>
                <div className=" w-full sm:w-9/12 md:w-8/12 text-center font-bold text-gray-500 text-sm my-2">(OR)</div>
                <Button text="Connect with Google" bgColor="bg-gray-200" color="text-gray-900" width="w-full sm:w-9/12 md:w-8/12"/>
                <div className="mt-4 w-full sm:w-9/12 md:w-8/12 text-center font-semibold text-gray-500 mb-4">Already have an account ? <Link className=" text-blue-800" to={'/login'}>Login</Link></div>
                
            </div>
        </div>
    )
}