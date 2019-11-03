import React from "react";
import { ChangeLotNum } from "./changeLotNumPresenter.js";

export class ChangeLotNumContainer extends React.Component {
  render() {
    return (
      <ChangeLotNum
        num={this.props.chosenNum}
        addChosenNum={num => this.props.addChosenNum(num)}
        changeChosenNum={this.props.changeChosenNum}
      />
    );
  }
}
