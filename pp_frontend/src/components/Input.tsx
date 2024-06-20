interface InputProps{
    inputType : string;
    placeholder : string;
    width? : string;
    height? : string;
    bgColor? : string
}

function Input({inputType, placeholder, width, height, bgColor} : InputProps){
    return(
     <>
        <input className={`${width} ${bgColor} px-2 rounded-lg ${height}`} type={inputType} placeholder={placeholder}/>
     </>   
    )
}

export default Input;