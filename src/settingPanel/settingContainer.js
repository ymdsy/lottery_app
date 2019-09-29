import React from "react";
import { SelectEnterModeContainer } from "./selectEnterModeContainer.js";

export class SettingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lotteryEnterMode: 0
    };
  }

  switchLotteryEnterMode(mode) {
    if (mode === 0 || mode === 1) {
      this.setState({
        lotteryEnterMode: mode
      });
    }
  }

  render() {
    return (
      <div>
        <SelectEnterModeContainer
          mode={this.state.lotteryEnterMode}
          switchMode={mode => this.switchLotteryEnterMode(mode)}
        />
        <div>もう一個、背景画像入力フォーム</div>
      </div>
    );
  }
}
