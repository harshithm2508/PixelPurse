import Button from "./Button";

function Navbar(){
    return(
        <div className="h-20 flex w-full items-center pl-5 sm:pl-24 pr-10 sm:pr-40 justify-between">
            <div className=" font-medium text-2xl text-blue-700">PixelPurse</div>
            <div className="flex gap-6">
                <Button text="Login" bgColor="bg-white" color="text-black" visibility={false} border="border-blue-500"/>
                <Button text="Sign Up" bgColor="bg-blue-500" color="text-white" visibility={true}/>
            </div>
        </div>      
    )
}

export default Navbar;