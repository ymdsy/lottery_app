import React from "react";
import { HistoryDelete } from "./historyDeletePresenter.js";

export class HistoryDeleteContainer extends React.Component {
  render() {
    return <HistoryDelete deleteHistory={() => this.props.deleteHistory()} />;
  }
}
