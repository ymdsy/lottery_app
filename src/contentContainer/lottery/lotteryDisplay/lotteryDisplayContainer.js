import React from "react";
import { Lottery } from "./lotteryDisplayPresenter.js";

export class LotteryDisplayContainer extends React.Component {
  render() {
    return (
      <>
        <Lottery value={this.props.wonLots} />
      </>
    );
  }
}
