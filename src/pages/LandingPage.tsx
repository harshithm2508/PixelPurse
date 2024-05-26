import { FeatureImage } from "../components/FeatureImage";

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
                    <div className=" mt-12 flex gap-16">
                        <FeatureImage text="Your money is safe with us. We use the latest security features and encryption technology to keep your information secure."/>
                        <FeatureImage text="Our app is easy to use and navigate. Easily check your balance and send money using mobile number or phone number."/>
                        <FeatureImage text="Need to send money in hurry? No problem. We offer fast transfers so you can get your money where it needs to go quickly."/>
                        <FeatureImage text="Earn rewards for everyday purchases and get exclusive perks from our partners. The more you use it, the more points you earn."/>
                    </div>
            </div>

        </div>

    );
}

export default LandingPage;
