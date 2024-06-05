import { useRecoilState, useRecoilValue } from "recoil"
import { userData } from "../state/atoms/UserInfo"
import { WalletBalance, TotalTransactions } from "../state/atoms/MonetaryState";
import { AmountDisplay } from "../components/AmountDisplay";

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
            <div className=" mt-5 w-full flex flex-wrap gap-10 text-center">
                {/* Wallet Balance  */}
                <AmountDisplay amount={walletBal} description="Current Balance"/>
                <AmountDisplay amount={totalTransactions} description="Total Transactions"/>


            </div>



            <div>add money</div>
            <div> Recent transactions</div>
        </div>
    )
}