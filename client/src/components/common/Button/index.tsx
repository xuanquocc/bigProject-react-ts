import React, { memo } from "react";

import './style.css'

interface ButtonPropsCus extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?:
    | "large"
    | "medium"
    | "small"
    | "large-long"
    | "medium-long"
    | "small-long";
  kind?: "primary" | "secondary" | "light" | "error";
  className?: string;
}

export const Button: React.FC<ButtonPropsCus> = memo(
  ({ text, className, variant, kind, ...rest }) => {
    return (
      <button  className={`bttn ${variant} ${kind} ${className}`} {...rest}>
        {text}
      </button>
    );
  },
);

Button.defaultProps = {
  variant: "medium",
  kind: "primary",
  className: "",
  children: "",
  text: "",
};
