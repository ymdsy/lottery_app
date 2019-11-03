import React from "react";
import "./switchPanelPresenter.css";

export function SwitchPanelPresenter(props) {
  return (
    <div class="switch-panel">
      <button
        class="btn switch-panel__btn"
        onClick={() => props.switching(props.settingMode)}
      >
        SettingMode
      </button>
      <button
        class="btn switch-panel__btn"
        onClick={() => props.switching(props.lotteryMode)}
      >
        lotteryMode
      </button>
    </div>
  );
}
