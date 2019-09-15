import React from "react";
import { LotteryDisplayContainer } from "./lotteryDisplayContainer.js";
import { LotteryButtonContainer } from "./button/lotteryButtonContainer.js";
import { ChangeNumOfPeopleContainer } from "./changeNumOfPeople/changeNumOfPeopleContainer.js";

const NUM_FORMAT_ERR_MSG = "this value is not number or cannot calc.";

export class LotteryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetLots: this.props.lots,
      wonNums: [],
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
      if (target.length === 0) {
        console.log("all lots was draw.");
        break;
      }
      const drawLot = Math.floor(Math.random() * target.length);
      wonLots.push(target[drawLot]);
      target.splice(drawLot, 1);
    }
    this.setState({
      wonNums: wonLots,
      targetLots: target
    });
  };

  render() {
    return (
      <div>
        LotteryContainer
        <LotteryDisplayContainer lotteryNums={this.state.wonNums} />
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
