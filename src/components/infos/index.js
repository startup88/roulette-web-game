import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import RouteltteField from "../basics/rouletteField";
import InputField from "../basics/InputField";

import "./index.css";

const Info = () => {
  return (
    <>
      <div className="main-content">
        <div style={{ display: "flex", width: "100%" }} className="info-content">
          <div className="info-left-values">
            <div className="bet-info">
                <div className="info-child">
                  <RouteltteField title="TOTAL BET" unit="€" value="11" />
                </div>
                <div className="info-child">
                  <RouteltteField title="CASH" unit="€" value="1000000" />
                </div>
                <div className="info-child">
                  <RouteltteField title="WIN" unit="€" value="0" />
                </div>
            </div>
          </div>
          <div className="info-right-values">
            <div className="numbers-info">
              <div className="latest-numbers">
                <RouteltteField title="LATEST NUMBERS" numberInfo="1" />
              </div>
              <div className="hot-cold-numbers">
                <RouteltteField title="HOT AND COLD NUMBERS" numberInfo="2" />
              </div>
              <div></div>
            </div>
            <div className="progress-info">
              <div className="progress-box">
                <RouteltteField title="RED BLACK" numberInfo="2" />
              </div>
              <div className="progress-box">
                <RouteltteField title="ODD|EVEN" numberInfo="2" />
              </div>
              <div className="progress-box">
                <InputField />
              </div>
              <div className="progress-box">
                <RouteltteField title="DOZENS |1|2|3" numberInfo="2" />
              </div>
              <div className="progress-box">
                <RouteltteField title="COLUMNS |1|2|3" numberInfo="2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
