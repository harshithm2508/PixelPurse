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
        <div className=" w-full sm:h-auto bg-white lg:bg-blue-500 flex justify-center items-center">
            <div className=" w-full w-full lg:w-4/5 h-full sm:h-auto px-10 py-3 bg-white rounded-xl flex flex-col gap-5">

                {/* Introduction to wallet and button to check your transactions */}
                <div className=" flex justify-between">
                    <div className=" font-bold text-2xl flex items-center">Your Wallet</div>
                    <Button text="See your transactions" bgColor="bg-gray-200" color="black" border="rounded-xl" misc=" hidden sm:visible"/>
                </div>


                {/* Displaying current wallet balance and transactions */}
                <div className=" h-auto w-full flex flex-col gap-5 sm:flex-row text-center">
                    {/* Wallet Balance  */}
                    <AmountDisplay amount={walletBal} description="Current Balance"/>
                    <AmountDisplay amount={totalTransactions} description="Total Transactions"/>
                </div>


                {/* Adding Funds */}
                <div className="w-full border-2 border-gray-300 px-5 py-4 flex flex-col-reverse sm:flex-row items-center justify-between lg:justify-center gap-5 rounded-lg">
                    <div>
                        <div className=" font-bold">Add Money</div>
                        <div className="text-base font-medium text-gray-500">Use your bank account or debit card to add money to your <span className="text-blue-700">PixelPurse</span> wallet</div>
                    </div>
                    <div>
                        <Button bgColor="bg-blue-500" text="Add money" color="text-white" border=" rounded-lg border-blue-500"/>
                    </div>
                </div>


                {/* Quick Actions and Payment Methods section  */}
                <div className=" h-auto w-full border-blue-500 flex flex-col sm:flex-row gap-8">

                    {/* Quick Actions Section */}
                    <div className=" w-full lg:w-2/5 p-5 border-gray-300 border-2 rounded-lg">
                        <div className=" font-bold text-lg">Quick Actions</div>
                        <QuickActionBar title="Pay or Request"/>                        
                        <QuickActionBar title="Invite Friends"/>                        
                        <QuickActionBar title="Get paid"/>                        
                        <QuickActionBar title="Transfer to bank"/>                        
                    </div>


                    {/* Payment Methods  */}
                    <div className=" w-full lg:w-2/5 p-5 border-gray-300 border-2 rounded-lg">
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