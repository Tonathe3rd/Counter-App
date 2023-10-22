import React from "react";

const Button = ({ onClick, text }) => (
  <button
    name={text}
    className="button"
    type="button"
    style={{"display": "flex", "align-items": "center", "justifyContent": "center"}}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;