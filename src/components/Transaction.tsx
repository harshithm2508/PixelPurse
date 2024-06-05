interface TransactionsProps{
    name : string;
    process : string;
    amount : number
}


export function TransactionsList({name, process, amount} : TransactionsProps){
    return(
        <div className=" flex border-b-2 justify-between items-center p-2">
            <div className=" flex gap-5">
                <div>IMG</div>
                <div>
                    <div>You {process} {amount} {process == 'sent' ? 'to' : 'from'} {name}</div>
                    <div>date</div>
                </div>
            </div>
            <div>{amount}</div>
        </div>
    )
}
