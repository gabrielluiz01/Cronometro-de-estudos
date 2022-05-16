import React from "react";
import style from "./button.module.scss";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
