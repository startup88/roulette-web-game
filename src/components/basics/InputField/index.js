import React from "react";
import "./index.css";

import useHook from "../../../store/hooks";
import calculateWinning from "../../../utils/calculateWinning";

import LossSound from "../../../assets/sounds/loss.wav";
import WinSound from "../../../assets/sounds/win.wav";

const InputField = () => {
  const {
    state: { wheelNumber, betsData, cash, latestNumbers },
    setState,
  } = useHook();

  const onSpin = () => {
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
    } else {
      alert("Please input necessary data");
    }
  };

  return (
    <>
      <div className="input-content">
        <div className="main-input">
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            WHEEL NUMBER
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 5,
              height: "60%",
            }}
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
        <div className="main-button">
          <button onClick={onSpin}>GO</button>
        </div>
      </div>
    </>
  );
};

export default InputField;
