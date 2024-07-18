import React from "react";
import PresetBet from "../basics/PresetBets";
import "./index.css";
import { Container, Row, Col, Image } from "react-bootstrap";

import useHook from "../../store/hooks";
import calculateWinning from "../../utils/calculateWinning";

const Controls = () => {
  const {
    state: { wheelNumber, betsData, cash },
    setState,
  } = useHook();

  const handleResult = () => {
    if (betsData.length && wheelNumber) {
      const newWin = calculateWinning(betsData, wheelNumber);
      if (newWin) {
        const totalBet = betsData.reduce((total, one) => total + one[2], 0);
        setState({
          field: "cash",
          value: cash + newWin - totalBet,
        });
      }
      setState({ field: "winAmount", value: newWin });
      setState({ field: "betsData", value: [] });
    } else {
      alert("Please input necessary data");
    }
  };

  return (
    <>
      <div className="controls-content">
        <Row style={{ width: "100%" }}>
          <Col sm="1"></Col>
          <Col sm="5" style={{ alignContent: "center" }}>
            <div className="control-box">
              <PresetBet />
            </div>
          </Col>
          <Col sm="1"></Col>
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
                <button
                  className="button-spin control-spin button-spin-radius"
                  onClick={handleResult}
                >
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
