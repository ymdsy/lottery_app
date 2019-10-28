import React from "react";

export function SwitchPanelPresenter(props) {
  return (
    <div>
      <button onClick={() => props.switching(props.lotteryMode)}>
        lotteryMode
      </button>
      <button onClick={() => props.switching(props.settingMode)}>
        SettingMode
      </button>
    </div>
  );
}
