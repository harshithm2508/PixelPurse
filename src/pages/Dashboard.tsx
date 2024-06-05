import { useRecoilState, useRecoilValue } from "recoil"
import { userData } from "../state/atoms/UserInfo"
import { WalletBalance, TotalTransactions } from "../state/atoms/MonetaryState";

export default function Dashboard(){

    const userdata  = useRecoilValue(userData);
    const [ walletBal, setWalletBal ] = useRecoilState(WalletBalance);
    const [ totalTransactions, setTotalTransactions ] = useRecoilState(TotalTransactions);
    const first_name = userdata.firstName;

    return(
        <div className=" h-screen-minus-20 flex flex-col items-start px-40">

            {/* Greeting User */}
            <div className=" mt-10 text-5xl text font-good">Welcome back, {first_name}</div>

            {/* Total Transactions and Wallet balance */}
            <div className=" mt-5 w-full flex gap-2 text-center">
                {/* Wallet Balance  */}
                <div className=" w-1/2 min-w-44 border-2 border-gray-300 rounded-lg ">
                    <div className=" font-bold text-2xl"><span>&#8377;</span>  {walletBal}</div>
                    <div className=" text-base font-medium text-gray-500">Current Balance</div>
                </div>
                <div className=" w-1/2 min-w-44 border-2 border-gray-300 rounded-lg ">
                    <div className=" font-bold text-2xl"><span>&#8377;</span>  {totalTransactions}</div>
                    <div className=" text-base font-medium text-gray-500">Total Transactions</div>
                </div>
            </div>



            <div>add money</div>
            <div> Recent transactions</div>
        </div>
    )
}