import React from "react";

export function SwitchPanel(props) {
  return (
    <div>
      switchPanel!
      <button onClick={() => props.switching(props.lotteryMode)}>
        lotteryMode
      </button>
      <button onClick={() => props.switching(props.settingMode)}>
        SettingMode
      </button>
    </div>
  );
}
