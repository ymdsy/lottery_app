import React from "react";
import { LotteryContainer } from "./lotteryPanel/lotteryContainer.js";

export function ContentContainer(props) {
  if (props.mode === 0) {
    return (
      <div>
        contentContainer!
        <LotteryContainer lots={props.lots} />
      </div>
    );
  } else if (props.mode === 1) {
    return <div>mode 1</div>;
  }
}
