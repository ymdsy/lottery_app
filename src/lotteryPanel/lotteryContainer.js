import React from "react";
import { LotteryDisplayContainer } from "./lotteryDisplayContainer.js";
import { LotteryButtonContainer } from "./button/lotteryButtonContainer.js";
import shuffle from "lodash/shuffle";
import memoize from "lodash/memoize";
import uniq from "lodash/uniq";

export class LotteryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wonIndexes: [],
      chosenNum: 3
    };
    this.selectLot = this.selectLot.bind(this);
  }

  // drawLots = memoize(lotteryNums => {
  //   this.setState(
  //     {
  //       winningIndexes: shuffle(lotteryNums).slice(0, this.state.chosenNum)
  //     },
  //     console.log
  //   );
  // });

  selectLot = () => {
    // 配列から指定された数の要素をランダムに取り出し、
    console.log("selectLot");

    const nums = shuffle(this.props.lotteryNums).slice(0, this.state.chosenNum);
    // const nums = shuffle(this.props.lotteryNums).slice(0, this.state.chosenNum);

    this.setState(
      {
        winningIndexes: nums
      },
      console.log
    );
  };

  render() {
    // const lotteryNums = this.selectLot();

    return (
      <div>
        LotteryContainer
        <div>上の方ヘッダ</div>
        <LotteryDisplayContainer lotteryNums={this.state.winningIndexes} />
        <LotteryButtonContainer
          selectLot={() => this.selectLot()}
          lotteryNums={this.props.lotteryNums}
        />
        <div>下右人数変更</div>
      </div>
    );
  }
}
