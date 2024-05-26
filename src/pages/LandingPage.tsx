import { FeatureImage } from "../components/FeatureImage";
import { PPWorking } from "../components/PPWorking";

function LandingPage() {
    return (
        <div className=" scroll-smooth">
            {/*Introduction Section*/}
            <div className="h-screen-minus-20 bg-blue-500 flex justify-center">
                <div className="h-1/2 w-3/5 mt-16 flex flex-col items-center" id="in-box">
                    <div className=" text-center font-extrabold text-white text-6xl sm:text-8xl md:text-9xl mb-4">
                        PixelPurse
                    </div>
                    <div className=" text-center font-extrabold sm:font-bold text-white text-xl sm:text-3xl md:text-3xl">
                        Safeguarding Student Stashes
                    </div>
                </div>
            </div>


            {/* Features Section */}
            <div className=" w-full h-screen px-16 pt-12">
                    <div className=" text-5xl font-extrabold">Why use <span className="text-blue-700">PixelPurse</span> Wallet?</div>
                    <div className="mt-8 w-3/4 text-2xl font-normal">Whether you are splitting a bill, buying a group gift, chipping in for a present, you can add a note to your payment to let the recipient know what it's for. You can also request money from multiple people at once.</div>
                    <div className=" mt-20 flex gap-16">
                        <FeatureImage text="Your money is safe with us. We use the latest security features and encryption technology to keep your information secure." imagePath="src\images\PixelPurse Secure Lock.jpg"/>
                        <FeatureImage text="Our app is easy to use and navigate. Easily check your balance and send money using mobile number or phone number." imagePath="src\images\Easy to use.jpg"/>
                        <FeatureImage text="Need to send money in hurry? No problem. We offer fast transfers so you can get your money where it needs to go quickly." imagePath="src\images\Fast Transactions.jpg"/>
                        <FeatureImage text="Earn rewards for everyday purchases and get exclusive perks from our partners. The more you use it, the more points you earn." imagePath="src\images\Earn Rewards.jpg"/>
                    </div>
            </div>


            {/* {How it works} */}
            <div className="w-full h-screen px-16 pt-12">
                <div className=" text-5xl font-extrabold">How it works ?</div>
                {/* Explaining working */}
                <div className="flex gap-6 mt-10">
                    {/* Create an account */}
                    <PPWorking icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg> } title="Sign Up" description="Create an account with your mobile number or email."/>

                    {/* Adding money */}
                    <PPWorking icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg> } title="Add Money" description="Transfer funds from your bank or add money from your cash app balance."/>

                    {/* Using wallet  */}
                    <PPWorking icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                        </svg> } title="Use your wallet" description="Send money to friends and family or spend it on something you love."/>

                    {/* secure transaction  */}
                    <PPWorking icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg> } title="Secure Transaction" description="We use encryption and fraud protection to help secure your transactions."/>
                </div>
            </div>

        </div>

    );
}

export default LandingPage;
