import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>POS Brahim</h1>
      <div className="header-right">
        <div className="clock">03:23</div>
        <input type="text" placeholder="Search Products" />
      </div>
    </div>
  );
};

export default Header;
