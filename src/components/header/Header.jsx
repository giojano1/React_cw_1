import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <nav>
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>products</li>
          <li>contact us</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
