interface QuickActionProps{
    title : string
}


export default function QuickActionBar({title} : QuickActionProps){
    return(
        <div className=" hover:cursor-pointer hover:border-b-2 hover:border-l-2 hover:border-r-2 2xl:my-1 rounded-lg hover:pb-1 pr-4 lg:pr-20 pt-2 hover:shadow-xl hover:shadow-blue-200 flex justify-between">
            <div className=" ml-2 2xl:text-lg font-medium text-gray-700">{title}</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sm:pr-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </div>
    )
}