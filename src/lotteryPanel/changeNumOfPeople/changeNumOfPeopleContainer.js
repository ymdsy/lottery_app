import React from "react";
import { ChangeNumOfPeople } from "./changeNumOfPeoplePresenter.js";

export class ChangeNumOfPeopleContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <ChangeNumOfPeople
        num={this.props.chosenNum}
        changeChosenNum={num => this.props.changeChosenNum(num)}
      />
    );
  }
}
