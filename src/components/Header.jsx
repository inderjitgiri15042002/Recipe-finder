import React from "react";

const Header = ({ handleClick, setInputSearch }) => {
  return (
    <div className="header">
      <div className="container" style={{height:"0rem"}}>
        <input
          type="text"
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search your Favourite Food"
        />
        <button onClick={() => handleClick()}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;

