interface FeatureImageProps{
    text : string
}

export function FeatureImage({text} : FeatureImageProps){
    return(
        <div className=" w-1/5 flex flex-col items-center">
            <img src="src\images\PixelPurse Secure Lock.jpg" className=" w-44 h-auto rounded-2xl mb-2" alt="" />
            <div className=" text-center font-semibold text-gray-500">{text}</div>
        </div>
    )
}
