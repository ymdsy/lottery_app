import React from "react";
import "./enterCSVPresenter.css";

export function EnterCSVPresenter(props) {
  return (
    <>
      <textarea
        class="textarea enter-lottery_textarea"
        onChange={event => props.enterCsv(event.target.value)}
      />
    </>
  );
}
