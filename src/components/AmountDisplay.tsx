interface AmountDisplayProps{
    description : string;
    amount : number
}

export function AmountDisplay({description, amount} : AmountDisplayProps){
    return(
        <div className=" w-1/2 min-w-44 border-2 border-gray-300 flex flex-col justify-center rounded-lg ">
            <div className=" font-bold text-2xl"><span>&#8377;</span>  {amount}</div>
            <div className=" text-base font-medium text-gray-500">{description}</div>
        </div>
    )
}