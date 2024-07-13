import React from "react";
import InputField from "../basics/InputField";
import PresetBet from "../basics/PresetBets";
import "./index.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const Controls = () => {
  return (
    <>
      <div className="controls-content">
        <Row style={{ width: "100%" }}>
          <Col sm="3">
            <div className="control-box1">
              <InputField />
            </div>
          </Col>
          <Col sm="4">
            <div className="control-box">
              <PresetBet />
            </div>
          </Col>
          <Col sm="5">
            <div className="button-control-box">
              <button className="control-button control-clear">
                <span>CLEAR</span>
              </button>
              <button className="control-button control-undo">
                <span>UNDO</span>
              </button>
              <button className="control-button control-double">
                <span>DOUBLE</span>
              </button>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button className="button-spin control-auto button-auto-radius">
                    <p className="auto-spin">AUTO SPIN</p>
                </button>
                <button className="button-spin control-spin button-spin-radius">
                    <span>SPIN</span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Controls;
