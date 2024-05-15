interface ButtonProps{
    text : string;
    bgColor : string;
    color : string;
    visibility? : boolean;
    border? : string;
    width? : string;
    margin? : string
}


function Button({text, bgColor, color, visibility, border, width, margin} : ButtonProps){
    return(
        <button className={`${bgColor} ${color} ${margin} ${width} ${visibility ? 'hidden sm:block' : null} border-2 ${border} px-4 py-2 font-semibold rounded-md`}>{text}</button>
    )
}

export default Button;