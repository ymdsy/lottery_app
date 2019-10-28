import React from "react";

export function EnterNumberPresenter(props) {
  return (
    <div>
      <input
        type="number"
        onChange={event => props.enterStartNum(event.target.value)}
      ></input>
      〜
      <input
        type="number"
        onChange={event => props.enterEndNum(event.target.value)}
      ></input>
    </div>
  );
}
