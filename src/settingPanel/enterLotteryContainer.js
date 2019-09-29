import React from "react";
// import { LotteryContainer } from "./lotteryPanel/lotteryContainer.js";
// import { SettingContainer } from "./settingPanel/settingContainer.js";

export function EnterLotteryContainer(props) {
  if (props.mode === 0) {
    return (
      <div>
        CSV!
        {/* <EnterCSVContainer /> */}
      </div>
    );
  } else if (props.mode === 1) {
    return (
      <div>
        Number!
        {/* <EnterNumberContainer /> */}
      </div>
    );
  }
}
