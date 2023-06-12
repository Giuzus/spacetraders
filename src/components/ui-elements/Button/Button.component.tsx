import React from "react";
import './Button.styles.css';

interface ButtonProps {
    primary?: boolean;
    children: string;
    onClick?: () => void;
}

export const Button = ({
    primary = false,
    children,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'btn-primary' : 'btn-secondary';
    return (
        <button
            type="button"
            className={['btn', mode].join(' ')}
            {...props}
        >
            {children}
        </button>
    );
};