import React from 'react';

interface InputProps {
  inputType: string;
  placeholder: string;
  width?: string;
  height?: string;
  bgColor?: string;
  onChangeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  inputType,
  placeholder,
  width,
  height,
  bgColor,
  onChangeFunc,
}) => {
  return (
    <>
      <input
        onChange={onChangeFunc}
        className={`${width} ${bgColor} px-2 rounded-lg ${height}`}
        type={inputType}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
