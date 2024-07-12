import React from "react";

import BET_TABLE from "../../consts/BetTable";

import "./styles.css";
const CustomTable = () => {
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
              <td className={`td-${one.color}`}>{one.label}</td>
            ))}
            <td className="td-row">2 to 1</td>
          </tr>
          <tr>
            {BET_TABLE.secondRow.map((one) => (
              <td className={`td-${one.color}`}>{one.label}</td>
            ))}
            <td className="td-row">2 to 1</td>
          </tr>
          <tr>
            {BET_TABLE.thirdRow.map((one) => (
              <td className={`td-${one.color}`}>{one.label}</td>
            ))}
            <td className="td-row">2 to 1</td>
          </tr>
          <tr>
            <td className="hidden-td"></td>
            <td colSpan={4}>5</td>
            <td colSpan={4}>5</td>
            <td colSpan={4}>5</td>
          </tr>
          <tr>
            <td className="hidden-td"></td>
            <td colSpan={2}>6</td>
            <td colSpan={2}>6</td>
            <td colSpan={2}>6</td>
            <td colSpan={2}>6</td>
            <td colSpan={2}>6</td>
            <td colSpan={2}>6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
