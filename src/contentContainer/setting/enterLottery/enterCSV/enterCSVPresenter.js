import React from "react";
import "./enterCSVPresenter.css";

export function EnterCSVPresenter(props) {
  return (
    <div class="enter-lottery">
      <textarea
        class="enter-lottery_textarea"
        onChange={event => props.enterCsv(event.target.value)}
      />
    </div>
  );
}
