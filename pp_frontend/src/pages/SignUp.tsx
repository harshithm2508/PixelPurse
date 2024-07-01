import Input from "../components/Input"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"



export default function SignUp(){

    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMobileNumber(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const signupDetailsSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const data = await axios.post("http://localhost:8787/api/v1/user/signup",{
            username,
            firstName,
            lastName,
            mobileNumber,
            password
        })
    }
    
    

    return(
        <div className="w-full h-screen-minus-20 flex justify-center">
            <div className="sm:w-1/2 min-w-0.5 h-1/2 mt-8">
                <div className=" text-2xl font-semibold">Welcome to <span className=" text-blue-700">PixelPurse</span></div>
                <div className="text-md font-medium text-gray-500">Create your <span className="text-blue-700">PixelPurse</span> account</div>

                <div className="mt-4 w-full">
                    <div className="text-md font-semibold">First Name</div>
                    <Input inputType="text" placeholder="John" width="w-full sm:w-9/12 md:w-8/12" height=" h-10" bgColor="bg-gray-100" onChangeFunc={handleFirstNameChange}/>
                </div>
                {firstName}

                <div className="mt-4 w-full">
                    <div className="text-md font-semibold">Last Name</div>
                    <Input inputType="text" placeholder="Doe" width="w-full sm:w-9/12 md:w-8/12" height=" h-10" bgColor="bg-gray-100" onChangeFunc={handleLastNameChange}/>
                </div>
                {lastName}

                <div className="mt-4 w-full">
                    <div className="text-md font-semibold">Email or Username</div>
                    <Input inputType="text" placeholder="example@mail.com" width="w-full sm:w-9/12 md:w-8/12" height=" h-10" bgColor="bg-gray-100" onChangeFunc={handleUsername}/>
                </div>
                {username}

                <div className="mt-4 w-full">
                    <div className="text-md font-semibold">Mobile Number</div>
                    <Input inputType="text" placeholder="+91 9999999999" width="w-full sm:w-9/12 md:w-8/12" height=" h-10" bgColor="bg-gray-100" onChangeFunc={handleMobileNumberChange}/>
                </div>
                {mobileNumber}

                <div className="mt-4 w-full">
                    <div className="text-md font-semibold">Password</div>
                    <Input inputType="password" placeholder="" width="w-full sm:w-9/12 md:w-8/12" onChangeFunc={handlePasswordChange} height=" h-10" bgColor="bg-gray-100"/>
                </div>
                {password}

                <Button text="Sign Up" margin="mt-6" bgColor="bg-blue-700" color="text-white" width="w-full sm:w-9/12 md:w-8/12" onClickFunc={signupDetailsSubmit}  />
                <div className=" w-full sm:w-9/12 md:w-8/12 text-center font-bold text-gray-500 text-sm my-2">(OR)</div>
                <Button text="Connect with Google" bgColor="bg-gray-200" color="text-gray-900" width="w-full sm:w-9/12 md:w-8/12"/>
                <div className="mt-4 w-full sm:w-9/12 md:w-8/12 text-center font-semibold text-gray-500 mb-4">Already have an account ? <Link className=" text-blue-800" to={'/login'}>Login</Link></div>
                
            </div>
        </div>
    )
}