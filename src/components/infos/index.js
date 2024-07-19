import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import RouteltteField from "../basics/rouletteField";
import InputField from "../basics/InputField";

import useHook from "../../store/hooks";

import "./index.css";

const Info = () => {
  const {
    state: { cash, winAmount, betsData, latestNumbers },
    setState,
  } = useHook();

  return (
    <>
      <div className="main-content">
        <div
          style={{ display: "flex", width: "100%" }}
          className="info-content"
        >
          <div className="info-left-values">
            <div className="bet-info">
              <div className="info-child">
                <RouteltteField
                  title="TOTAL BET"
                  unit="€"
                  value={betsData.reduce((total, one) => total + one[2], 0)}
                />
              </div>
              <div className="info-child">
                <RouteltteField
                  title="CASH"
                  unit="€"
                  value={cash}
                  onChangeCash={setState}
                  inputDisabled={false}
                />
              </div>
              <div className="info-child">
                <RouteltteField title="WIN" unit="€" value={winAmount} />
              </div>
            </div>
          </div>
          <div className="info-right-values">
            <div className="numbers-info">
              <div className="latest-numbers">
                <RouteltteField
                  title="LATEST NUMBERS"
                  numberInfo="1"
                  numberArrays={latestNumbers}
                />
              </div>
              <div className="hot-cold-numbers">
                <RouteltteField title="HOT AND COLD NUMBERS" numberInfo="2" />
              </div>
              <div></div>
            </div>
            <div className="progress-info">
              <div className="progress-box">
                <RouteltteField title="RED|BLACK" numberInfo="2" />
              </div>
              <div className="progress-box">
                <RouteltteField title="ODD|EVEN" numberInfo="2" />
              </div>
              <div className="progress-box">
                <InputField />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
