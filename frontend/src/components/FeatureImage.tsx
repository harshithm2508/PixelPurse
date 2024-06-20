interface FeatureImageProps{
    text : string;
    imagePath : string;
}

export function FeatureImage({text, imagePath} : FeatureImageProps){
    return(
        <div className=" w-full sm:w-1/5 flex flex-row sm:flex-col gap-5 items-center">
            <img src={imagePath} className=" w-28 sm:w-44 h-auto rounded-2xl mb-2" alt="" />
            <div className=" text-center font-semibold text-gray-500">{text}</div>
        </div>
    )
}
