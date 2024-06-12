interface QuickActionProps{
    title : string
}


export default function QuickActionBar({title} : QuickActionProps){
    return(
        <div className=" hover:cursor-pointer hover:border-b-2 hover:pb-1 mt-2 flex justify-between pr-20">
            <div>{title}</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </div>
    )
}