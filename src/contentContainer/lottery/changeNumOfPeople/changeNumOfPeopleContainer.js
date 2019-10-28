import React from "react";
import { ChangeNumOfPeople } from "./changeNumOfPeoplePresenter.js";

export class ChangeNumOfPeopleContainer extends React.Component {
  render() {
    return (
      <ChangeNumOfPeople
        num={this.props.chosenNum}
        addChosenNum={num => this.props.addChosenNum(num)}
        changeChosenNum={this.props.changeChosenNum}
      />
    );
  }
}
