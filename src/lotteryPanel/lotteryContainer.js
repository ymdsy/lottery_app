import React from "react";
import { LotteryDisplayContainer } from "./lotteryDisplayContainer.js";
import { LotteryButtonContainer } from "./button/lotteryButtonContainer.js";
import shuffle from "lodash/shuffle";
import memoize from "lodash/memoize";

export class LotteryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winningIndexes: [],
      chosenNum: 3
    };
    // this.drawLots = this.drawLots.bind(this);
  }

  // drawLots = memoize(lotteryNums => {
  //   this.setState(
  //     {
  //       winningIndexes: shuffle(lotteryNums).slice(0, this.state.chosenNum)
  //     },
  //     console.log
  //   );
  // });

  render() {
    const lotteryNums = shuffle(this.props.lotteryNums).slice(
      0,
      this.state.chosenNum
    );

    return (
      <div>
        LotteryContainer
        <div>上の方ヘッダ</div>
        <LotteryDisplayContainer lotteryNums={lotteryNums} />
        <LotteryButtonContainer />
        <div>下右人数変更</div>
      </div>
    );
  }
}
