import React from "react";

export function SwitchPanel(props) {
  const LOTTERY_MODE = 0;
  const SETTING_MODE = 1;

  return (
    <div>
      switchPanel!
      <button onClick={() => props.switching(LOTTERY_MODE)}>lotteryMode</button>
      <button onClick={() => props.switching(SETTING_MODE)}>SettingMode</button>
    </div>
  );
}
