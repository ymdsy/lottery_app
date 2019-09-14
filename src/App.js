import React from "react";
import "./App.css";
import { LotteryContainer } from "./lotteryPanel/lotteryDisplayContainer";

class App extends React.Component {
  constructor() {
    super(); // これが必要な理由調べること。
    this.state = {
      lotteryNums: [1, 2, 3, 4],
      winningIndexes: []
    };
  }
  render() {
    return (
      <div>
        App Component
        <LotteryContainer lotteryNums={this.state.lotteryNums} />
      </div>
    );
  }
}

export default App;
