import React from "react";
import * as S from "./styles";

interface InputProps {
  placeholder?: string;
  onChangeText: (text: string) => void;
  value: string;
  placeholderTextColor?: string;
}

const InputComponent: React.FC<InputProps> = ({
  placeholder,
  onChangeText,
  value,
  placeholderTextColor,
}) => {
  const isPassword = placeholder?.toLowerCase().includes("password");

  return (
    <S.InputComponent
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={isPassword}
    />
  );
};

export default InputComponent;
