import React from "react";
import { EnterCSVContainer } from "./enterCSV/enterCSVContainer.js";
// import { SettingContainer } from "./settingPanel/settingContainer.js";

const CSV_MODE = 0;
const NUMBER_MODE = 1;

export function EnterLotteryContainer(props) {
  if (props.mode === CSV_MODE) {
    return (
      <div>
        <EnterCSVContainer
          updateParsedData={parsedData => {
            props.updateParsedData(parsedData);
          }}
        />
      </div>
    );
  } else if (props.mode === NUMBER_MODE) {
    return (
      <div>
        Number!
        {/* <EnterNumberContainer /> */}
      </div>
    );
  }
}
