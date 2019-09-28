import React from "react";
import "./App.css";
// import { LotteryContainer } from "./lotteryPanel/lotteryContainer.js";
import { SwitchContainer } from "./switchPanel/switchContainer.js";

class App extends React.Component {
  constructor() {
    super(); // これが必要な理由調べること。
    this.state = {
      lots: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      mode: 1
    };
  }
  render() {
    return (
      <div>
        App Component
        <SwitchContainer lots={this.state.lots} mode={this.state.mode} />
      </div>
    );
  }
}

export default App;
