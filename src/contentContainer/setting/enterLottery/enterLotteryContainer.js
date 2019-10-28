import React from "react";
import { EnterCSVContainer } from "./enterCSV/enterCSVContainer.js";
// import { SettingContainer } from "./settingPanel/settingContainer.js";

const CSV_MODE = 0;
const NUMBER_MODE = 1;

export function EnterLotteryContainer(props) {
  if (props.mode === CSV_MODE) {
    return (
      <>
        <EnterCSVContainer
          updateParsedData={parsedData => {
            props.updateParsedData(parsedData);
          }}
        />
      </>
    );
  } else if (props.mode === NUMBER_MODE) {
    return (
      <>
        Number!
        {/* <EnterNumberContainer /> */}
      </>
    );
  }
}
