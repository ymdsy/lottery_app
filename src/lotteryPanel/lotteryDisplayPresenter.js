import React from "react";
import "./lotteryDisplayPresenter.css";

export function Lottery(props) {
  return (
    <div className="lotteryDisplayPresenter">
      {props.value.map(num => num + " ")}
    </div>
  );
}
