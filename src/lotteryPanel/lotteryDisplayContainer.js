import React from "react";
import { Lottery } from "./lotteryDisplayPresenter.js";

export class LotteryContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        LotteryContainer
        {/* {this.props.lotteryNums} */}
        <div></div>
        <Lottery value={this.props.lotteryNums} />
      </div>
    );
  }
}
