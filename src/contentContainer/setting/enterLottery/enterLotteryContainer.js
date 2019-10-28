import React from "react";
import { EnterCSVContainer } from "./enterCSV/enterCSVContainer.js";
// import { SettingContainer } from "./settingPanel/settingContainer.js";

export function EnterLotteryContainer(props) {
  if (props.mode === props.csvMode) {
    return (
      <>
        <EnterCSVContainer
          updateParsedData={parsedData => {
            props.updateParsedData(parsedData);
          }}
        />
      </>
    );
  } else if (props.mode === props.numberMode) {
    return (
      <>
        Number!
        {/* <EnterNumberContainer /> */}
      </>
    );
  }
}
