import React from "react";
import { LotteryContainer } from "./lottery/lotteryContainer.js";
import { SettingContainer } from "./setting/settingContainer.js";

export function ContentContainer(props) {
  if (props.mode === props.lotteryMode) {
    return (
      <>
        <LotteryContainer lots={props.lots} />
      </>
    );
  } else if (props.mode === props.settingMode) {
    return (
      <>
        <SettingContainer
          updateLots={data => {
            props.updateLots(data);
          }}
        />
      </>
    );
  }
}
