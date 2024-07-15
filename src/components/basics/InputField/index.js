import React from "react";
import "./index.css";

const InputField = () => {
  return (
    <>
      <div className="input-content">
        <div className="main-input">
          <div
            style={{
              position: "relative",
              fontSize: "14px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            BET
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="text"
              className="input-field"
              style={{
                backgroundColor: "transparent",
                color: "#000000",
                fontWeight: "bold",
                border: "none",
                width: "90%",
                textAlign: "center",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputField;
