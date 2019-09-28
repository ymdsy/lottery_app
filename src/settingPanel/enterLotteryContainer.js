import React from "react";
import { LotteryKindSwitchPanel } from "./lotteryKindSwitchPanel.js";

export class EnterLotteryContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LotteryKindSwitchPanel
        switchMode={mode => this.props.switchMode(mode)}
      />
    );
  }
}
