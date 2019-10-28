import React from "react";
import { HistoryPresenter } from "./historyPresenter.js";

export class HistoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.switchHistory = this.switchHistory.bind(this);
  }

  switchHistory() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <HistoryPresenter
        deleteHistory={() => this.props.deleteHistory()}
        wonLots={this.props.wonLots}
        switchHistory={this.switchHistory}
        isOpen={this.state.isOpen}
      />
    );
  }
}
