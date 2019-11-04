import React from "react";
import { EnterCSVContainer } from "./enterCSV/enterCSVContainer.js";
import { EnterNumberContainer } from "./enterNumber/enterNumberContainer.js";

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
        {
          <EnterNumberContainer
            updateParsedData={parsedData => {
              props.updateParsedData(parsedData);
            }}
          />
        }
      </>
    );
  }
}
