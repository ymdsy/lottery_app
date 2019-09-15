import React from "react";
// import "./lotteryDisplayPresenter.css";

export function LotteryButton(props) {
  return (
    <button
      onClick={() => {
        props.drawLots();
      }}
    >
      抽選する
    </button>
  );
}
