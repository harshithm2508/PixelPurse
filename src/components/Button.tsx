function Button({text, bgColor, color, visibility, border} : {text : string, bgColor : string, color : string, visibility : boolean, border? : string}){
    return(
        <button className={`${bgColor} ${color} ${visibility ? 'hidden sm:block' : null} border-2 ${border} px-4 py-2 font-semibold rounded-md`}>{text}</button>
    )
}

export default Button;