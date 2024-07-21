import React from "react";
import PresetBet from "../basics/PresetBets";
import "./index.css";
import { Container, Row, Col, Image } from "react-bootstrap";

import useHook from "../../store/hooks";
import calculateWinning from "../../utils/calculateWinning";

import LossSound from "../../assets/sounds/loss.wav";
import WinSound from "../../assets/sounds/win.wav";

const Controls = () => {
  const {
    state: { wheelNumber, betsData, cash, latestNumbers, previousBetsData },
    setState,
  } = useHook();

  const handleResult = () => {
    if (betsData.length && wheelNumber) {
      const newWin = calculateWinning(betsData, wheelNumber);
      const totalBet = betsData.reduce((total, one) => total + one[2], 0);
      setState({ field: "winAmount", value: newWin });
      setState({ field: "previousBetsData", value: betsData });
      setState({ field: "showResult", value: true });

      const LossSndPlay = new Audio(LossSound);
      const WinSndPlay = new Audio(WinSound);
      if (newWin > 0) {
        WinSndPlay.play();
      } else {
        LossSndPlay.play();
      }

      setTimeout(() => {
        setState({
          field: "cash",
          value: cash + newWin - totalBet,
        });
        setState({
          field: "latestNumbers",
          value: [...latestNumbers, wheelNumber],
        });
        setState({ field: "betsData", value: [] });
        setState({ field: "wheelNumber", value: undefined });
        setState({ field: "winAmount", value: 0 });
        setState({ field: "showResult", value: false });
      }, 2000);
    } else if (!betsData.length && previousBetsData.length) {
      setState({ field: "betsData", value: previousBetsData });
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
          <Col sm="4" style={{ alignContent: "end" }}>
            <div className="button-control-box">
              <button
                className="control-button"
                onClick={() => {
                  setState({ field: "betsData", value: [] });
                }}
                style={{ visibility: betsData.length ? "visible" : "hidden" }}
              >
                <span>CLEAR</span>
              </button>
              <button
                className="control-button"
                onClick={() => {
                  const tempData = [...betsData];
                  tempData.pop(); //remove the last bet
                  setState({ field: "betsData", value: tempData });
                }}
                style={{ visibility: betsData.length ? "visible" : "hidden" }}
              >
                <span>UNDO</span>
              </button>
              <button
                className="control-button"
                onClick={() => {
                  let tempData = [...betsData];
                  tempData = tempData.map((one) => [
                    one[0],
                    one[1],
                    2 * one[2],
                  ]);
                  setState({ field: "betsData", value: tempData });
                }}
                style={{ visibility: betsData.length ? "visible" : "hidden" }}
              >
                <span>DOUBLE</span>
              </button>
              <button className="control-button" onClick={handleResult}>
                <span>REBET</span>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Controls;
