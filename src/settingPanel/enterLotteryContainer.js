import React from "react";
import { EnterCSVContainer } from "./enterCSV/enterCSVContainer.js";
// import { SettingContainer } from "./settingPanel/settingContainer.js";

export function EnterLotteryContainer(props) {
  if (props.mode === 0) {
    return (
      <div>
        <EnterCSVContainer />
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
