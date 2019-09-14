import React from "react";
import "./lotteryDisplayPresenter.css";

export function Lottery(props) {
  return (
    <div class="lotteryDisplayPresenter">
      {props.value.map(num => num + " ")}
    </div>
  );
}
