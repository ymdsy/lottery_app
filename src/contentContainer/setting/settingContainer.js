import React from "react";
import { SelectEnterModePresenter } from "./selectEnterModePresenter.js";
import { EnterLotteryContainer } from "./enterLottery/enterLotteryContainer.js";
import { EnteredLotteryPresenter } from "./enteredLotteryPresenter";
import "./settingContainer.css";

const CSV_MODE = 0;
const NUMBER_MODE = 1;

export class SettingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lotteryEnterMode: NUMBER_MODE,
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
      <div class="setting">
        <SelectEnterModePresenter
          csvMode={CSV_MODE}
          numberMode={NUMBER_MODE}
          mode={this.state.lotteryEnterMode}
          switchMode={mode => this.switchLotteryEnterMode(mode)}
        />
        <div class="setting__enter-lottery">
          <EnterLotteryContainer
            csvMode={CSV_MODE}
            numberMode={NUMBER_MODE}
            mode={this.state.lotteryEnterMode}
            updateParsedData={parsedData => {
              this.updateParsedData(parsedData);
            }}
          />
          <div class="setting__hyphen">=></div>
          <EnteredLotteryPresenter values={this.state.parsedData} />
        </div>
      </div>
    );
  }
}
