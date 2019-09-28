import React from "react";
import { LotteryContainer } from "../lotteryPanel/lotteryContainer.js";

export class SwitchContainer extends React.Component {
  render() {
    return (
      <div>
        switchContainer!
        <div>上の方ヘッダ</div>
        <LotteryContainer lots={this.props.lots} />
      </div>
    );
  }
}
