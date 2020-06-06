import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeHolder, onChangeState }) => {
  return (
    <div className="search-box">
      <input type="search" placeholder={placeHolder} onChange={onChangeState} />
    </div>
  );
};
