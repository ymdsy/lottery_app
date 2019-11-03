import React from "react";

export function EnteredLotteryPresenter(props) {
  return (
    <div class="enterd-lottery">
      {props.values.map((value, i) => {
        if (props.values.length === i + 1) {
          return value;
        } else {
          return value + ", ";
        }
      })}
    </div>
  );
}
