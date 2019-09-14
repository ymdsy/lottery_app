import React from "react";
// import "./lotteryDisplayPresenter.css";

export function LotteryButton(props) {
  return (
    <button
      onClick={() => {
        props.selectLot();
      }}
    >
      抽選する
    </button>
  );
}
