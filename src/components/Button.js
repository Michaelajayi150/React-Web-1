import React from "react";
import { Link } from "react-router-dom";

function Button({ children, type, onClick, buttonSize, buttonStyle }) {
  const STYLING = ["btn-primary", "btn-outline"];
  const SIZING = ["btn-medium", "btn-large"];

  const checkButtonStyle = STYLING.includes(buttonStyle)
    ? buttonStyle
    : STYLING[0];
  const checkButtonSize = SIZING.includes(buttonSize) ? buttonSize : SIZING[0];

  return (
    <Link to="/" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
