interface FeatureImageProps{
    text : string;
    imagePath : string;
}

export function FeatureImage({text, imagePath} : FeatureImageProps){
    return(
        <div className=" w-1/5 flex flex-col items-center">
            <img src={imagePath} className=" w-44 h-auto rounded-2xl mb-2" alt="" />
            <div className=" text-center font-semibold text-gray-500">{text}</div>
        </div>
    )
}
