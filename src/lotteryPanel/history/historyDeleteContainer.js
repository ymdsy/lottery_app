import React from "react";
import { HistoryDelete } from "./historyDeletePresenter.js";

export class HistoryDeleteContainer extends React.Component {
  //   constructor(props) {
  // super(props);
  // this.state = {
  //   isOpen: false
  // };
  // this.switchHistory = this.switchHistory.bind(this);
  //   }

  render() {
    return <HistoryDelete deleteHistory={() => this.props.deleteHistory()} />;
  }
}
