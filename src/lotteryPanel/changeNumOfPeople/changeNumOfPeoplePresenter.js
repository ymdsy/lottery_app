import React from "react";
// import "./lotteryDisplayPresenter.css";

export function ChangeNumOfPeople(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.changeChosenNum(-1);
        }}
      >
        -
      </button>
      {props.num}
      <button
        onClick={() => {
          props.changeChosenNum(1);
        }}
      >
        +
      </button>
    </div>
  );
}
