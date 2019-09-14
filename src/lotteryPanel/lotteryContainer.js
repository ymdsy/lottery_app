import React from "react";
import { LotteryDisplayContainer } from "./lotteryDisplayContainer.js";

export class LotteryContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        LotteryContainer
        <div>上の方ヘッダ</div>
        <LotteryDisplayContainer lotteryNums={this.props.lotteryNums} />
        <div>下左ボタン</div>
        <div>下右人数変更</div>
      </div>
    );
  }
}
