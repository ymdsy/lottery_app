import React from "react";
import "./switchPanelPresenter.css";

export function SwitchPanelPresenter(props) {
  return (
    <div class="switch-panel">
      <button
        class={
          props.mode === props.settingMode
            ? "btn btn_active switch-panel__btn"
            : "btn switch-panel__btn"
        }
        onClick={() => props.switching(props.settingMode)}
      >
        SettingMode
      </button>
      <button
        class={
          props.mode === props.lotteryMode
            ? "btn btn_active switch-panel__btn"
            : "btn switch-panel__btn"
        }
        onClick={() => props.switching(props.lotteryMode)}
      >
        lotteryMode
      </button>
    </div>
  );
}
