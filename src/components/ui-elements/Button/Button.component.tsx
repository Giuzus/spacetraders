import React from "react";
import './Button.styles.css';

function Button({ children, onClick }: any) {
    return (<button type="button" className="btn btn-blue" onClick={onClick}>{children}</button>);
}

export default Button;