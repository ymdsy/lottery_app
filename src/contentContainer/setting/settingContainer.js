import React from "react";
import { SelectEnterModeContainer } from "./selectEnterMode/selectEnterModeContainer.js";
import { EnterLotteryContainer } from "./enterLottery/enterLotteryContainer.js";
import { DisplayEnterLotteryPresenter } from "./displayEnterLotteryPresenter";

const CSV_MODE = 0;
const NUMBER_MODE = 1;

export class SettingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lotteryEnterMode: 0,
      parsedData: []
    };

    this.updateParsedData = this.updateParsedData.bind(this);
  }

  switchLotteryEnterMode(mode) {
    if (mode === CSV_MODE || mode === NUMBER_MODE) {
      this.setState({
        lotteryEnterMode: mode
      });
    }
  }

  updateParsedData(parsedData) {
    this.setState({
      parsedData: parsedData
    });

    this.props.updateLots(parsedData);
  }

  render() {
    return (
      <div>
        <SelectEnterModeContainer
          mode={this.state.lotteryEnterMode}
          switchMode={mode => this.switchLotteryEnterMode(mode)}
        />
        <div>
          <EnterLotteryContainer
            mode={this.state.lotteryEnterMode}
            updateParsedData={parsedData => {
              this.updateParsedData(parsedData);
            }}
          />
          =>
          <DisplayEnterLotteryPresenter values={this.state.parsedData} />
        </div>
        <div>もう一個、背景画像入力フォーム</div>
      </div>
    );
  }
}
