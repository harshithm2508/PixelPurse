import { ReactElement } from "react";

interface PPWorkingProps{
    icon : ReactElement;
    title : string;
    description : string;
}

export function PPWorking({title, description, icon} : PPWorkingProps){
    return(
        <div className=" border-2 shadow-2xl shadow-blue-200 border-blue-700 w-full sm:w-1/5 flex flex-col p-4 rounded-lg justify-start">
            {icon}
            <div className=" font-bold mt-2">{title}</div>
            <div className=" font-semibold text-gray-500">{description}</div>
        </div>
    )
}