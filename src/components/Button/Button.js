import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

export default function Button({ page, btnText, btnType }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(page);
  };

  return (
    <div className={`${btnType}`} onClick={handleClick}>
      {btnText}
    </div>
  );
}
