interface ButtonProps{
    text : string;
    bgColor : string;
    color : string;
    visibility? : boolean;
    border? : string;
    width? : string;
    margin? : string;
    onClickFunc? : () => void;
    misc? : string;
}


function Button({text, bgColor, color, visibility, border, width, margin, onClickFunc, misc} : ButtonProps){
    return(
        <button onClick={onClickFunc} className={`${bgColor} ${color} ${margin} ${misc} ${width} ${visibility ? 'hidden sm:block' : null} border-2 ${border} px-4 py-2 font-semibold`}>{text}</button>
    )
}

export default Button;