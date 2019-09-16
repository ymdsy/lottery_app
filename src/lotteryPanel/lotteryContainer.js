import React from "react";
import { LotteryDisplayContainer } from "./lotteryDisplayContainer.js";
import { LotteryButtonContainer } from "./button/lotteryButtonContainer.js";
import { ChangeNumOfPeopleContainer } from "./changeNumOfPeople/changeNumOfPeopleContainer.js";
import { HistoryContainer } from "./history/historyContainer.js";

const NUM_FORMAT_ERR_MSG = "this value is not number or cannot calc.";
const ALL_LOTS_DRAW_MSG = "all lots was draw.";

export class LotteryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetLots: this.props.lots,
      wonLots: [],
      chosenNum: 3
    };
    this.drawLots = this.drawLots.bind(this);
  }

  changeChosenNum(addNum) {
    if (
      typeof addNum !== "number" ||
      Number.isNaN(addNum) ||
      this.state.chosenNum + addNum < 0
    ) {
      console.log(NUM_FORMAT_ERR_MSG);
      return;
    }
    this.setState({
      chosenNum: this.state.chosenNum + addNum
    });
  }

  drawLots = () => {
    const wonLots = [];
    const target = this.state.targetLots.slice();
    for (let i = 0; i < this.state.chosenNum; i++) {
      //　これ以上くじが引けないエラー
      if (target.length === 0) {
        console.log(ALL_LOTS_DRAW_MSG);
        break;
      }
      const drawLotIndex = Math.floor(Math.random() * target.length);
      wonLots.push(target[drawLotIndex]);
      target.splice(drawLotIndex, 1);
    }
    this.setState({
      wonLots: wonLots,
      targetLots: target
    });
  };

  render() {
    return (
      <div>
        <HistoryContainer />
        LotteryContainer
        <LotteryDisplayContainer wonLots={this.state.wonLots} />
        <LotteryButtonContainer
          drawLots={() => this.drawLots()}
          lotteryNums={this.props.lots}
        />
        <ChangeNumOfPeopleContainer
          chosenNum={this.state.chosenNum}
          changeChosenNum={num => this.changeChosenNum(num)}
        />
      </div>
    );
  }
}
