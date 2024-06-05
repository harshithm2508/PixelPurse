import { useRecoilState, useRecoilValue } from "recoil"
import { userData } from "../state/atoms/UserInfo"
import { WalletBalance, TotalTransactions } from "../state/atoms/MonetaryState";
import { Transactions } from "../state/atoms/MonetaryState";
import { AmountDisplay } from "../components/AmountDisplay";
import { TransactionsList } from "../components/Transaction";
import Button from "../components/Button";

export default function Dashboard(){

    const userdata  = useRecoilValue(userData);
    const [ walletBal, setWalletBal ] = useRecoilState(WalletBalance);
    const [ totalTransactions, setTotalTransactions ] = useRecoilState(TotalTransactions);
    const transactionsData = useRecoilValue(Transactions);
    const first_name = userdata.firstName;

    return(
        <div className=" h-screen-minus-20 flex flex-col items-start px-40">

            {/* Greeting User */}
            <div className=" mt-10 text-5xl text font-good">Welcome back, {first_name}</div>

            {/* Total Transactions and Wallet balance */}
            <div className=" mt-5 h-20 w-full flex flex-wrap text-center">
                {/* Wallet Balance  */}
                <AmountDisplay amount={walletBal} description="Current Balance"/>
                <AmountDisplay amount={totalTransactions} description="Total Transactions"/>
            </div>


            {/* Add Money  */}
            <div className=" mt-5 w-full border-2 border-gray-300 px-5 py-2 flex justify-between items-center rounded-lg">
                <div>
                    <div className=" font-bold">Add Money</div>
                    <div className="text-base font-medium text-gray-500">Use your bank account or debit card to add money to your <span className="text-blue-700">PixelPurse</span> wallet</div>
                </div>
                <div>
                    <Button bgColor="bg-blue-500" text="Add money" color="text-white" border=" rounded-lg border-blue-500"/>
                </div>
            </div>
            
            <div className=" mt-10 mb-2 font-semibold text-2xl"> Recent transactions</div>
            <div className=" w-full">
                {transactionsData.map((x) => (
                <TransactionsList amount={x.amount} name={x.name} process={x.process} date={x.date} />))}
            </div>
        </div>
    )
}