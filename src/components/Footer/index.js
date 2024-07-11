import React from "react";

import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="actions">
        <span data-btn="menu"> </span>
        <span data-btn="son"> </span>
        <span data-btn="red"> </span>
        <span data-btn="amp"> </span>
      </div>
      <div className="balance">
        BALANCE <span className="footer-info">$1000</span>
      </div>
      <div className="total">
        TOTAL BET <span className="footer-info"> </span>
      </div>
      <div className="win">
        WIN <span className="footer-info">$0.00</span>
      </div>
      <div style={{ paddingRight: "10px", fontSize: "12px" }}>
        American Roulette
      </div>
    </footer>
  );
};
export default Footer;
