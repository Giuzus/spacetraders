import React from "react";
import cn from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  children: string;
}

export const Button = ({ primary, className, ...props }: ButtonProps) => {
  const mode = primary ? "btn-primary" : "btn-secondary";

  return (
    <button type="button" className={cn("btn", mode, className)} {...props} />
  );
};
