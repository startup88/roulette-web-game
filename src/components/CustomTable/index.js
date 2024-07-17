import React, { useState, useEffect } from "react";

import {
  BET_TABLE,
  twoByOneFirst,
  twoByOneSecond,
  twoByOneThird,
  firstTwelves,
  secondTwelves,
  thirdTwelves,
  oneToEighteen,
  nineteenToThirtySix,
  even,
  odd,
  red,
  black,
  chipsTableData,
} from "../../consts/BetTable";

import "./styles.css";
const CustomTable = () => {
  const [numStates, setNumStates] = useState([]);
  const [betPlaceData, setBetPlaceData] = useState([]);

  const betUnit = 1;

  const displayTableTd = (type, numStr) => {
    if (betPlaceData && betPlaceData.length) {
      return betPlaceData
        .filter((one) => one[0] === type && one[1] === numStr)
        .reduce((total, one) => total + one[2], 0);
    }
    return 0;
  };

  const placeBets = (type, numStr, amount) => {
    setBetPlaceData([...betPlaceData, [type, numStr, amount]]);
  };

  useEffect(() => {
    window.addEventListener("load", function () {
      const tableElement = document.getElementsByClassName("betTable-main")[0];
      // const hiddenTable =
      //   this.document.getElementsByClassName("betTable-hidden")[0];

      tableElement.style.height = (tableElement.clientWidth * 5) / 14 + "px";
    });

    window.addEventListener("resize", function () {
      const tableElement = document.getElementsByClassName("betTable-main")[0];
      const hiddenTable =
        this.document.getElementsByClassName("betTable-hidden")[0];

      tableElement.style.height = (tableElement.clientWidth * 5) / 14 + "px";
      // hiddenTable.style.height = (hiddenTable.clientWidth * 5) / 14 + "px";
    });
  });

  const DisplayMainTableRow = ({ rowData }) => {
    return rowData.map((one) => (
      <td
        key={one.label}
        className={`td-${one.color} ${
          numStates.includes(one.label) && "hover"
        } `}
      >
        <div onClick={() => placeBets(1, one.label, betUnit)}>{one.label}</div>
      </td>
    ));
  };

  const DisplayHiddenTableRow = ({ rowData }) => {
    return rowData.map((bet, index) => {
      const selectedBets = betPlaceData.filter((one) => {
        return one[1] === `${bet}`;
      });
      return (
        <td
          className={selectedBets.length ? "betTable-chip" : ""}
          key={index}
          onClick={(e) => {
            if (typeof bet === "object") {
              placeBets(bet.length, `${bet}`, betUnit);
            } else {
              placeBets(1, `${bet}`, betUnit);
            }
          }}
          onMouseEnter={() => {
            setNumStates(typeof bet === "object" ? bet : [bet]);
          }}
          onMouseLeave={() => {
            setNumStates([]);
          }}
        >
          {selectedBets.length
            ? selectedBets.reduce((total, one) => total + one[2], 0)
            : ""}
        </td>
      );
    });
  };

  return (
    <div className="betTable">
      <table
        className="betTable-main"
        border={1}
        cellPadding={1}
        cellSpacing={1}
        // height={100}
      >
        <tbody>
          <tr>
            <td
              className="betTable-zeros"
              rowSpan={3}
              style={{ alignContent: "center", padding: 0 }}
            >
              <div
                className={`betTable-header ${
                  numStates.includes("00") && "hover"
                }`}
                onClick={() => placeBets(1, "00", betUnit)}
              >
                00
              </div>
              <div
                className={`betTable-header ${
                  numStates.includes(0) && "hover"
                }`}
                onClick={() => placeBets(1, "0", betUnit)}
              >
                0
              </div>
            </td>
            <DisplayMainTableRow rowData={BET_TABLE.firstRow} />

            <td
              className="td-row"
              onMouseOver={() => {
                setNumStates(twoByOneFirst);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            >
              2 to 1
            </td>
          </tr>
          <tr>
            <DisplayMainTableRow rowData={BET_TABLE.secondRow} />
            <td
              className="td-row"
              onMouseOver={() => {
                setNumStates(twoByOneSecond);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            >
              2 to 1
            </td>
          </tr>
          <tr>
            <DisplayMainTableRow rowData={BET_TABLE.thirdRow} />
            <td
              className="td-row"
              onMouseOver={() => {
                setNumStates(twoByOneThird);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            >
              2 to 1
            </td>
          </tr>
          <tr>
            <td className="hidden-td"></td>
            <td
              colSpan={4}
              onMouseOver={() => {
                setNumStates(firstTwelves);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            >
              1st 12
            </td>
            <td
              colSpan={4}
              onMouseOver={() => {
                setNumStates(secondTwelves);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            >
              2nd 12
            </td>
            <td
              colSpan={4}
              onMouseOver={() => {
                setNumStates(thirdTwelves);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            >
              3rd 12
            </td>
          </tr>
          <tr>
            <td className="hidden-td"></td>
            <td
              colSpan={2}
              onMouseOver={() => {
                setNumStates(oneToEighteen);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            >
              1-18
            </td>
            <td
              colSpan={2}
              onMouseOver={() => {
                setNumStates(even);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            >
              Even
            </td>
            <td
              className="betTable-red-diamond"
              colSpan={2}
              onMouseOver={() => {
                setNumStates(red);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            ></td>
            <td
              className="betTable-black-diamond"
              colSpan={2}
              onMouseOver={() => {
                setNumStates(black);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            ></td>
            <td
              colSpan={2}
              onMouseOver={() => {
                setNumStates(odd);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            >
              Odd
            </td>
            <td
              colSpan={2}
              onMouseOver={() => {
                setNumStates(nineteenToThirtySix);
              }}
              onMouseOut={() => {
                setNumStates([]);
              }}
            >
              19-36
            </td>
          </tr>
        </tbody>
      </table>
      <table
        className="betTable-hidden"
        cellPadding={1}
        cellSpacing={1}
        height={100}
      >
        <tbody>
          <tr className="betTable-hidden-first-row">
            <td className="betTable-hidden-header" rowSpan={2}></td>
            <DisplayHiddenTableRow rowData={chipsTableData[0]} />
          </tr>
          <tr>
            <DisplayHiddenTableRow rowData={chipsTableData[1]} />
          </tr>
          <tr>
            <DisplayHiddenTableRow rowData={chipsTableData[2]} />
          </tr>
          <tr>
            <td className="betTable-hidden-header" rowSpan={2}></td>
            <DisplayHiddenTableRow rowData={chipsTableData[3]} />
          </tr>
          <tr>
            <DisplayHiddenTableRow rowData={chipsTableData[4]} />
          </tr>
          <tr>
            <td
              className="betTable-hidden-header"
              style={{ visibility: "hidden", border: "none" }}
            ></td>
            <DisplayHiddenTableRow rowData={chipsTableData[5]} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
