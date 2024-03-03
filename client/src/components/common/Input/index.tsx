import React, { memo } from "react";
import {InputAdornment } from "@mui/material";
import mailLogo from "../../../assets/icon/mail.png"; 
import errorIcon from "../../../assets/icon/error.png"
import unionIcon from "../../../assets/icon/Union.png"
import InputStyle from './style.ts'

interface InputPropsCus extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  className?: string;
  size?: "large" | "small" | "medium" | string;
  icon?: string;
  placeholder?: string;
  type: string;
  error?: boolean;
}




export const Input: React.FC<InputPropsCus> = memo(
  ({ label, className, size, placeholder, error, type, icon, ...rest }) => {
    const { color, ...inputProps } = rest;

    return (
      <>
        {label && <label htmlFor="input">{label}</label>}

        <div className="input-group flex flex-row rounded-xl flex-1">
          <InputStyle
            error={error}
            className={`iput ${className} ${size} ${error ? "error" : ""}`}
            type={type}
            placeholder={placeholder}
            {...inputProps} 
            startAdornment={
              <InputAdornment position="start">
                {!error ? <div className="mail-icon flex justify-center items-center border-r-2 pr-2"><img src={mailLogo} alt="mail" /></div> : <div className="mail-icon flex justify-center items-center pr-2 ml-2"><img src={unionIcon} alt="mail" /></div>}
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                {error ? <div className="mr-2"><img src={errorIcon} alt="icon" /> </div>: null}
              </InputAdornment>
            }
          />
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
