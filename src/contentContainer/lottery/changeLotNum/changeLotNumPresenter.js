import React from "react";
import "./changeLotNumPresenter.css";

export function ChangeLotNum(props) {
  return (
    <div>
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
        type="number"
        value={props.num}
        onChange={event => props.changeChosenNum(event.target.value)}
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
