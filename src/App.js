import React from "react";
import "./App.css";
import { LotteryContainer } from "./lotteryPanel/lotteryContainer.js";

class App extends React.Component {
  constructor() {
    super(); // これが必要な理由調べること。
    this.state = {
      lotteryNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  }
  render() {
    return (
      <div>
        App Component
        <div>上の方ヘッダ</div>
        <LotteryContainer lotteryNums={this.state.lotteryNums} />
      </div>
    );
  }
}

export default App;
