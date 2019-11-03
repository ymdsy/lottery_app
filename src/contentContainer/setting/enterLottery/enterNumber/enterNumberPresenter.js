import React from "react";
import "./enterNumberPresenter.css";

export function EnterNumberPresenter(props) {
  return (
    <div class="enter-num">
      <input
        class="input enter-num__input"
        type="number"
        onChange={event => props.enterStartNum(event.target.value)}
      ></input>
      〜
      <input
        class="input enter-num__input"
        type="number"
        onChange={event => props.enterEndNum(event.target.value)}
      ></input>
    </div>
  );
}
