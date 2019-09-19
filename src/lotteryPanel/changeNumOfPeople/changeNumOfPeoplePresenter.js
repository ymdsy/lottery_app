import React from "react";
// import "./lotteryDisplayPresenter.css";

export function ChangeNumOfPeople(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.addChosenNum(-1);
        }}
      >
        -
      </button>
      <input type="text" value={props.num} onChange={props.changeChosenNum} />
      <button
        onClick={() => {
          props.addChosenNum(1);
        }}
      >
        +
      </button>
    </div>
  );
}
