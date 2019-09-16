import React from "react";
import "./App.css";
import { LotteryContainer } from "./lotteryPanel/lotteryContainer.js";

class App extends React.Component {
  constructor() {
    super(); // これが必要な理由調べること。
    this.state = {
      lots: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    };
  }
  render() {
    return (
      <div>
        App Component
        <div>上の方ヘッダ</div>
        <LotteryContainer lots={this.state.lots} />
      </div>
    );
  }
}

export default App;
