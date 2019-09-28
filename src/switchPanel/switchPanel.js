import React from "react";

export function SwitchPanel(props) {
  return (
    <div>
      switchPanel!
      <button onClick={() => props.switching(0)}>lotteryMode</button>
      <button onClick={() => props.switching(1)}>SettingMode</button>
    </div>
  );
}
