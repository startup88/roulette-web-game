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
              display: "flex",
              justifyContent: "center",
            }}
          >
            WHEEL NUMBER
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="number"
              className="input-field"
              min={0}
              max={36}
              onChange={(e) => {
                e.persist();
                let inputValue = e.target.value;
                if (inputValue > 36) {
                  inputValue = 36;
                  e.target.value = 36;
                } else if (inputValue < 0) {
                  inputValue = 0;
                  e.target.value = 0;
                }
                console.log("event =>", inputValue == "0");
              }}
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
