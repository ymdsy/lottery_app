import React from "react";

export function LotteryKindSwitchPanel(props) {
  return (
    <div>
      <button onClick={() => props.switchMode(0)}>CSVyMode</button>
      <button onClick={() => props.switchMode(1)}>NumberMode</button>
    </div>
  );
}
