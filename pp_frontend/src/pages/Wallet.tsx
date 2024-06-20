import Button from "../components/Button";
import { AmountDisplay } from "../components/AmountDisplay";
import { WalletBalance, TotalTransactions } from "../state/atoms/MonetaryState";
import { useRecoilState } from "recoil";
import QuickActionBar from "../components/QuickActionBar";
import PaymentOption from "../components/PaymentOptions";

export default function Wallet(){


    
    const [ walletBal, setWalletBal ] = useRecoilState(WalletBalance);
    const [ totalTransactions, setTotalTransactions ] = useRecoilState(TotalTransactions);


    return(
        <div className=" w-full sm:h-auto lg:h-screen-minus-20 bg-white lg:bg-blue-500 flex justify-center items-center">
            <div className=" w-full lg:w-4/5 2xl:w-4/5 lg:p-8 h-full sm:h-auto px-10 py-3 bg-white rounded-xl flex flex-col gap-5 2xl:justify-between">

                {/* Introduction to wallet and button to check your transactions */}
                <div className=" flex justify-between flex-wrap">
                    <div className=" font-bold text-2xl 2xl:text-4xl flex items-center">Your Wallet</div>
                    <Button text="See your transactions" bgColor="bg-gray-200" color="black" border="rounded-xl" misc=" mt-2 " />
                </div>


                {/* Displaying current wallet balance and transactions */}
                <div className=" h-auto w-full flex flex-col gap-5 sm:flex-row text-center">
                    {/* Wallet Balance  */}
                    <AmountDisplay amount={walletBal} description="Current Balance"/>
                    <AmountDisplay amount={totalTransactions} description="Total Transactions"/>
                </div>


                {/* Adding Funds */}
                <div className="w-full border-2 border-gray-300 px-5 py-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-5 rounded-lg">
                    <div>
                        <div className=" font-bold 2xl:text-2xl">Add Money</div>
                        <div className="text-base font-medium 2xl:text-lg text-gray-500">Use your bank account or debit card to add money to your <span className="text-blue-700">PixelPurse</span> wallet</div>
                    </div>
                    <div>
                        <Button bgColor="bg-blue-500" text="Add money" color="text-white" border=" rounded-lg border-blue-500"/>
                    </div>
                </div>


                {/* Quick Actions and Payment Methods section  */}
                <div className=" h-auto w-full border-blue-500 flex flex-col sm:flex-row gap-8">

                    {/* Quick Actions Section */}
                    <div className=" w-full lg:w-1/2 p-5 flex flex-col justify-between border-gray-300 border-2 rounded-lg">
                        <div className=" font-bold text-lg">Quick Actions</div>
                        <QuickActionBar title="Pay or Request"/>                        
                        <QuickActionBar title="Invite Friends"/>                        
                        <QuickActionBar title="Get paid"/>                        
                        <QuickActionBar title="Transfer to bank"/>                        
                    </div>


                    {/* Payment Methods  */}
                    <div className=" w-full lg:w-1/2 p-5 border-gray-300 border-2 rounded-lg">
                        <div className=" font-bold text-lg">Payment Methods</div>
                        <PaymentOption nameOfCard="Mastercard" cardNumber="5149"/>
                        <PaymentOption nameOfCard="Visa" cardNumber="1753"/>
                        <Button text="Manage Payment Options" bgColor="bg-gray-200" color="black" border="rounded-xl" margin="mt-2"/>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}