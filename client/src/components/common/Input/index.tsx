import React, { memo } from "react";
import mailLogo from "../../../assets/icon/mail.png";
import './style.css'

interface InputPropsCus extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  className?: string;
  size?: "large" | "small" | "medium" | string;
  icon?: string;
  placeholder?: string;
  type: string
}


export const Input: React.FC<InputPropsCus> = memo(
  ({ label, className, size, placeholder,type, ...rest }) => {
    return (
      <>
        {label && <label htmlFor="input">{label}</label>}
        <div className="input-group flex flex-row rounded-xl">
          <div className="mail-icon flex justify-center items-center border-r-2 pr-2"><img src={mailLogo} alt="mail" /></div>
          <input type={type} className={`iput ${className} ${size}`} {...rest} placeholder={placeholder}/>
        </div>
      </>
    );
  },
);

Input.defaultProps = {
  label: "",
  className: "",
  size: "small",
};

export default Input;
