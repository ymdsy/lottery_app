import React from "react";
import "./switchPanelPresenter.css";

export function SwitchPanelPresenter(props) {
  return (
    <div id="switchPanelPresenter">
      <button
        class="switchPanelPresenterBtn"
        onClick={() => props.switching(props.settingMode)}
      >
        SettingMode
      </button>
      <button
        class="switchPanelPresenterBtn"
        onClick={() => props.switching(props.lotteryMode)}
      >
        lotteryMode
      </button>
    </div>
  );
}
