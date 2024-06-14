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
        <div className=" w-full h-screen-minus-20 bg-blue-500 flex justify-center items-center">
            <div className=" w-4/5 h-5/6 px-10 py-3 bg-white rounded-xl">

                {/* Introduction to wallet and button to check your transactions */}
                <div className=" flex justify-between">
                    <div className=" font-bold text-2xl flex items-center">Your Wallet</div>
                    <Button text="See your transactions" bgColor="bg-gray-200" color="black" border="rounded-xl"/>
                </div>


                {/* Displaying current wallet balance and transactions */}
                <div className=" mt-5 h-20 w-full flex flex-col gap-5 sm:flex-row text-center">
                    {/* Wallet Balance  */}
                    <AmountDisplay amount={walletBal} description="Current Balance"/>
                    <AmountDisplay amount={totalTransactions} description="Total Transactions"/>
                </div>


                {/* Adding Funds */}
                <div className=" mt-20 sm:mt-5 w-full border-2 border-gray-300 px-5 py-2 flex flex-col-reverse sm:flex-row justify-between items-center rounded-lg">
                    <div>
                        <div className=" font-bold">Add Money</div>
                        <div className="text-base font-medium text-gray-500">Use your bank account or debit card to add money to your <span className="text-blue-700">PixelPurse</span> wallet</div>
                    </div>
                    <div>
                        <Button bgColor="bg-blue-500" text="Add money" color="text-white" border=" rounded-lg border-blue-500"/>
                    </div>
                </div>


                {/* Quick Actions and Payment Methods section  */}
                <div className=" h-auto w-full mt-5 border-blue-500 flex gap-8">

                    {/* Quick Actions Section */}
                    <div className=" w-2/5 p-5 border-gray-300 border-2 rounded-lg">
                        <div className=" font-bold text-lg">Quick Actions</div>
                        <QuickActionBar title="Pay or Request"/>                        
                        <QuickActionBar title="Invite Friends"/>                        
                        <QuickActionBar title="Get paid"/>                        
                        <QuickActionBar title="Transfer to bank"/>                        
                    </div>


                    {/* Payment Methods  */}
                    <div className=" w-2/5 p-5 border-gray-300 border-2 rounded-lg">
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