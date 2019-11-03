import React from "react";
import "./lotteryDisplayPresenter.css";

export function Lottery(props) {
  return (
    <div className="lottery-display">
      {props.value ? props.value.map(num => num + " ") : null}
    </div>
  );
}
