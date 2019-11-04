import React from "react";
import "./switchPanelPresenter.css";

export function SwitchPanelPresenter(props) {
  return (
    <div className="switch-panel">
      <button
        className={
          props.mode === props.settingMode
            ? "btn btn_active switch-panel__btn"
            : "btn switch-panel__btn"
        }
        onClick={() => props.switching(props.settingMode)}
      >
        SettingMode
      </button>
      <button
        className={
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
