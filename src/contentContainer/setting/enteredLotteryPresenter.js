import React from "react";
import "./enteredLotteryPresenter.css";

export function EnteredLotteryPresenter(props) {
  return (
    <div className="entered-lottery">
      {props.values.map((value, i) => {
        if (props.values.length === i + 1) {
          return value;
        } else {
          return value + ", ";
        }
      })}
    </div>
  );
}
