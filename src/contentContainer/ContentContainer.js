import React from "react";
import { LotteryContainer } from "./lottery/lotteryContainer.js";
import { SettingContainer } from "./setting/settingContainer.js";

export function ContentContainer(props) {
  if (props.mode === 0) {
    return (
      <>
        contentContainer!
        <LotteryContainer lots={props.lots} />
      </>
    );
  } else if (props.mode === 1) {
    return (
      <>
        <SettingContainer
          lots={props.lots}
          updateLots={data => {
            props.updateLots(data);
          }}
        />
      </>
    );
  }
}
