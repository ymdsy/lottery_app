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
      latestWonLots: [],
      wonLots: [],
      chosenNum: 3
    };
    this.drawLots = this.drawLots.bind(this);
  }

  /**
   * 一度に抽選するくじの数を変更するためのメソッド。
   * @param {加える人数} addNum
   */
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

  /**
   * くじを引くメソッド。
   * 引かれたくじは抽選可能なくじから消え、引かれたくじとして登録される。
   */
  drawLots = () => {
    const latestWonLots = [];
    const target = this.state.targetLots.slice();
    for (let i = 0; i < this.state.chosenNum; i++) {
      //　これ以上くじが引けないエラー
      if (target.length === 0) {
        console.log(ALL_LOTS_DRAW_MSG);
        break;
      }
      const drawLotIndex = Math.floor(Math.random() * target.length);
      latestWonLots.push(target[drawLotIndex]);
      target.splice(drawLotIndex, 1);
    }

    // 取得された最新のくじを引かれたくじに追加
    const wonLots = this.state.wonLots.slice();
    latestWonLots.map(lot => {
      wonLots.push(lot);
    });

    this.setState({
      latestWonLots: latestWonLots,
      wonLots: wonLots,
      targetLots: target
    });
  };

  render() {
    return (
      <div>
        <HistoryContainer wonLots={this.state.wonLots} />
        <LotteryDisplayContainer wonLots={this.state.latestWonLots} />
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
