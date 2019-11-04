import React from "react";
import "./lotteryButtonPresenter.css";

export function LotteryButton(props) {
  return (
    <button
      className="btn lottery-btn"
      onClick={() => {
        props.drawLots();
      }}
    >
      抽選する
    </button>
  );
}
