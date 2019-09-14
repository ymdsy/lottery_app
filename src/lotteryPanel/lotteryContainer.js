import React from "react";
import { Lottery } from "./lotteryPresenter.js";

export class LotteryContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        LotteryContainer
        {/* {this.props.lotteryNums} */}
        <Lottery value={this.props.lotteryNums} />
      </div>
    );
  }
}
