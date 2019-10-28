import React from "react";
import { LotteryKindSwitchPanel } from "./lotteryKindSwitchPanel.js";

export class SelectEnterModeContainer extends React.Component {
  render() {
    return (
      <LotteryKindSwitchPanel
        switchMode={mode => this.props.switchMode(mode)}
      />
    );
  }
}
