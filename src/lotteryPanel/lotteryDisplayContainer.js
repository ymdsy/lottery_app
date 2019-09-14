import React from "react";
import { Lottery } from "./lotteryDisplayPresenter.js";

export class LotteryDisplayContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        LotteryDisplayContainer
        {/* {this.props.lotteryNums} */}
        <Lottery value={this.props.lotteryNums} />
      </div>
    );
  }
}
