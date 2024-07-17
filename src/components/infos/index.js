import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import RouteltteField from "../basics/rouletteField";
import InputField from "../basics/InputField";

import "./index.css";

const Info = () => {
  return (
    <>
      <div className="main-content">
        <Row style={{ width: "100%" }}>
          <Col sm="5" className="info-left-values">
            <div className="bet-info">
              <Row style={{ width: "100%" }}>
                <Col xs="4" sm="4">
                  <RouteltteField title="TOTAL BET" unit="€" value="11" />
                </Col>
                <Col xs="4" sm="4">
                  <RouteltteField title="CASH" unit="€" value="1000000" />
                </Col>
                <Col xs="4" sm="4">
                  <RouteltteField title="WIN" unit="€" value="0" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm="7" className="info-right-values">
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
              {/* <div className="progress-box">
                <RouteltteField title="DOZENS |1|2|3" numberInfo="2" />
              </div>
              <div className="progress-box">
                <RouteltteField title="COLUMNS |1|2|3" numberInfo="2" />
              </div> */}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Info;
