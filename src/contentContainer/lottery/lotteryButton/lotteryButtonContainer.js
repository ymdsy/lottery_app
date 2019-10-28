import React from "react";
import { LotteryButton } from "./lotteryButtonPresenter.js";

export class LotteryButtonContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <LotteryButton drawLots={() => this.props.drawLots()} />;
  }
}
