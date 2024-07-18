import React from "react";

import useHook from "../../store/hooks";

import "./styles.css";

const Footer = () => {
  const {
    state: { cash, betsData, winAmount },
    setState,
  } = useHook();
  return (
    <footer>
      <div className="actions">
        <span data-btn="menu"> </span>
        <span data-btn="son"> </span>
        <span data-btn="red"> </span>
        <span data-btn="amp"> </span>
      </div>
      <div className="balance">
        BALANCE <span className="footer-info">${cash}</span>
      </div>
      <div className="total">
        TOTAL BET{" "}
        <span className="footer-info">
          {betsData.reduce((total, one) => total + one[2], 0)}
        </span>
      </div>
      <div className="win">
        WIN <span className="footer-info">${winAmount}</span>
      </div>
      <div style={{ paddingRight: "10px", fontSize: "12px" }}>
        American Roulette
      </div>
    </footer>
  );
};
export default Footer;
