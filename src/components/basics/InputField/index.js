import React from "react";
import "./index.css";

import useHook from "../../../store/hooks";

const InputField = () => {
  const {
    state: { wheelNumber },
    setState,
  } = useHook();

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
          <div
            style={{ display: "flex", justifyContent: "center", flexGrow: 5 }}
          >
            <input
              type="number"
              className="input-field"
              min={0}
              max={36}
              value={wheelNumber == "" ? "" : Number(wheelNumber)}
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
                if (`${inputValue}` !== "00") {
                  inputValue = Number(inputValue);
                }

                setState({ field: "wheelNumber", value: `${inputValue}` });
              }}
              style={{
                backgroundColor: "transparent",
                color: "#000000",
                fontWeight: "bold",
                border: "none",
                width: "90%",
                textAlign: "center",
                marginBottom: "3%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputField;
