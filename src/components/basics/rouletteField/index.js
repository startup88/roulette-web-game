/* eslint-disable eqeqeq */
import React from "react";
import "./index.css";

const RouteltteField = (props) => {
  const { title, value, unit, numberInfo } = props;
  const numberArrays = [];

  return (
    <div
      className={
        numberInfo !== "2"
          ? numberInfo === "1"
            ? "contain-latest"
            : "contain"
          : "contain-hot-cold"
      }
    >
      <div className="main-field">
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="bet-title"
        >
          {title}
        </div>
        <div className="content">
          <div className="value">
            <span className="unit">{unit}</span>
            <div
              className="info"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "55%",
              }}
            >
              {numberInfo != 1 ? (
                <input
                  type="text"
                  value={value}
                  style={{
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    fontWeight: "bold",
                    border: "none",
                    width: "90%",
                    textAlign: "center",
                  }}
                  disabled
                />
              ) : (
                <>
                  {numberArrays.map((item) => (
                    <input
                      type="text"
                      value={item}
                      style={{
                        backgroundColor: "transparent",
                        color: "#ffffff",
                        fontWeight: "bold",
                        border: "none",
                        width: "90%",
                        textAlign: "center",
                      }}
                      disabled
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteltteField;
