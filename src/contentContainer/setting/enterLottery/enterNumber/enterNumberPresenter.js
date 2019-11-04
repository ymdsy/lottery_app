import React from "react";
import "./enterNumberPresenter.css";

export function EnterNumberPresenter(props) {
  return (
    <div className="enter-num">
      <input
        className="input enter-num__input"
        type="number"
        onChange={event => props.enterStartNum(event.target.value)}
      ></input>
      〜
      <input
        className="input enter-num__input"
        type="number"
        onChange={event => props.enterEndNum(event.target.value)}
      ></input>
    </div>
  );
}
