import React from "react";
import { SelectEnterMode } from "./selectEnterModePresenter.js";
import { EnterLotteryContainer } from "./enterLottery/enterLotteryContainer.js";
import { EnteredLotteryPresenter } from "./enteredLotteryPresenter";
import { SetBackgroundPresenter } from "./setBackgroundPresenter.js";
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

  /**
   * くじの入力モードを切り変える。
   * @param モードの数値 mode
   */
  switchLotteryEnterMode(mode) {
    if (mode === CSV_MODE || mode === NUMBER_MODE) {
      this.setState({
        lotteryEnterMode: mode
      });
    }
  }

  /**
   * パース済みのデータ（画面表示用）と、くじを更新する。
   * @param パース済みのデータ parsedData
   */
  updateParsedData(parsedData) {
    this.setState({
      parsedData: parsedData
    });

    this.props.updateLots(parsedData);
  }

  render() {
    return (
      <>
        <div className="setting">
          <SelectEnterMode
            csvMode={CSV_MODE}
            mode={this.state.lotteryEnterMode}
            numberMode={NUMBER_MODE}
            switchMode={mode => this.switchLotteryEnterMode(mode)}
          />
          <div className="setting__enter-lottery">
            <EnterLotteryContainer
              csvMode={CSV_MODE}
              numberMode={NUMBER_MODE}
              mode={this.state.lotteryEnterMode}
              updateParsedData={parsedData => {
                this.updateParsedData(parsedData);
              }}
            />
            <div className="setting__hyphen">=></div>
            <EnteredLotteryPresenter values={this.state.parsedData} />
          </div>
        </div>
        <div className="setting">
          <SetBackgroundPresenter
            bgImgUrl={this.props.bgImgUrl}
            bgMode={this.props.bgMode}
            bgOriginalMode={this.props.bgOriginalMode}
            bgFullMode={this.props.bgFullMode}
            changeBgMode={this.props.changeBgMode}
            updateBgImgUrl={url => this.props.updateBgImgUrl(url)}
          />
        </div>
      </>
    );
  }
}
