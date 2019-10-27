import React from "react";

export function DisplayEnterLotteryPresenter(props) {
  return (
    <div>
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
