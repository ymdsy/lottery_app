import React from "react";
import { History } from "./historyPresenter.js";

export class HistoryContainer extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  switchHistory() {
    const history = document.getElementById("history");
    history.style.display =
      history.style.display.toString() === "block" ? "none" : "block";
  }

  render() {
    return (
      <History
        wonLots={this.props.wonLots}
        switchHistory={this.switchHistory}
      />
    );
  }
}
