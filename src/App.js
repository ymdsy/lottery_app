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

  switching(num) {
    if (num === 0 || num === 1) {
      this.setState({
        mode: num
      });
    }
  }

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
          settingMode={SETTING_MODE}
          switching={num => this.switching(num)}
        />
        <ContentContainer
          mode={this.state.mode}
          lots={this.state.lots}
          updateLots={data => this.updateLots(data)}
        />
      </>
    );
  }
}

export default App;
