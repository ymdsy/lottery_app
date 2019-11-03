import React from "react";

export function LotteryButton(props) {
  return (
    <button
      class="btn"
      onClick={() => {
        props.drawLots();
      }}
    >
      抽選する
    </button>
  );
}
