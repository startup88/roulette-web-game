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
} from "../../consts/BetTable";

import "./styles.css";
const CustomTable = () => {
  const [numStates, setNumStates] = useState([]);

  return (
    <div className="betTable">
      <table border={1} cellPadding={1} cellSpacing={1} height={100}>
        <tbody>
          <tr>
            <td
              className="betTable-zeros"
              rowSpan={3}
              style={{ alignContent: "center", padding: 0 }}
            >
              <div>2</div>
              <div>22</div>
            </td>
            {BET_TABLE.firstRow.map((one) => (
              <td
                key={one.label}
                className={`td-${one.color} ${
                  numStates.includes(one.label) && "hover"
                } `}
              >
                {one.label}
              </td>
            ))}
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
            {BET_TABLE.secondRow.map((one) => (
              <td
                key={one.label}
                className={`td-${one.color} ${
                  numStates.includes(one.label) && "hover"
                }`}
              >
                {one.label}
              </td>
            ))}
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
            {BET_TABLE.thirdRow.map((one) => (
              <td
                key={one.label}
                className={`td-${one.color} ${
                  numStates.includes(one.label) && "hover"
                }`}
              >
                {one.label}
              </td>
            ))}
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
    </div>
  );
};

export default CustomTable;
