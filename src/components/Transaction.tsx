interface TransactionsProps{
    name : string;
    process : string;
    amount : number;
    date : string
}


export function TransactionsList({name, process, amount, date} : TransactionsProps){
    const naam = name.split(' ');
    return(
        <div className=" flex border-b-2 justify-between items-center p-2">
            <div className=" flex gap-5">
                <div className=" bg-blue-300 rounded-full h-10 w-10 flex justify-center items-center">{naam[0][0]+naam[1][0]}</div>
                <div>
                    <div className=" font-mukta">You {process}  <span>&#8377;</span>{amount}  {process == 'sent' ? 'to' : 'from'} {name}</div>
                    <div className=" text-gray-400 text-sm font-semibold">{date}</div>
                </div>
            </div>
            {process == 'sent' ? <div className=" text-red-500 font-semibold"> <span>&#8377;</span> {amount}</div> : <div className=" text-green-500 font-semibold"> <span>&#8377;</span> {amount}</div>}
        </div>
    )
}
