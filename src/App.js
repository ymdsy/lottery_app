import React from "react";
import "./App.css";
import { SwitchPanelPresenter } from "./switchPanel/switchPanelPresenter.js";
import { ContentContainer } from "./contentContainer/ContentContainer.js";

const LOTTERY_MODE = 0;
const SETTING_MODE = 1;

class App extends React.Component {
  constructor() {
    super(); // これが必要な理由調べること。
    this.state = {
      lots: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      mode: SETTING_MODE
    };

    this.switching = this.switching.bind(this);
    this.updateLots = this.updateLots.bind(this);
  }

  /**
   * くじ引きモードか設定モードかを切り替える。
   * @param 切り替えるモードの固定数値 num
   */
  switching(num) {
    if (num === LOTTERY_MODE || num === SETTING_MODE) {
      this.setState({
        mode: num
      });
    }
  }

  /**
   * くじびき対象となるデータを上書きする。
   * @param くじの対象としたいデータ data
   */
  updateLots(data) {
    this.setState({
      lots: data
    });
  }

  render() {
    return (
      <>
        <SwitchPanelPresenter
          lotteryMode={LOTTERY_MODE}
          mode={this.state.mode}
          settingMode={SETTING_MODE}
          switching={num => this.switching(num)}
        />
        <ContentContainer
          lotteryMode={LOTTERY_MODE}
          lots={this.state.lots}
          mode={this.state.mode}
          settingMode={SETTING_MODE}
          updateLots={data => this.updateLots(data)}
        />
      </>
    );
  }
}

export default App;
