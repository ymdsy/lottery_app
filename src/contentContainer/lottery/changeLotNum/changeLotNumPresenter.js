import React from "react";
import "./changeLotNumPresenter.css";

export function ChangeLotNum(props) {
  return (
    <div class="change-lot-num">
      <button
        class="btn change-lot-num__btn"
        onClick={() => {
          props.addChosenNum(-1);
        }}
      >
        -
      </button>
      <input
        class="input"
        type="text"
        value={props.num}
        onChange={props.changeChosenNum}
      />
      <button
        class="btn change-lot-num__btn"
        onClick={() => {
          props.addChosenNum(1);
        }}
      >
        +
      </button>
    </div>
  );
}
