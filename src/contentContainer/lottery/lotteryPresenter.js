import React from "react";
import { LotteryDisplayContainer } from "./lotteryDisplay/lotteryDisplayContainer.js";
import { LotteryButtonContainer } from "./lotteryButton/lotteryButtonContainer.js";
import { ChangeLotNumContainer } from "./changeLotNum/changeLotNumContainer.js";
import { HistoryContainer } from "./history/historyContainer.js";
import "./lotteryPresenter.css";

export class LotteryPresenter extends React.Component {
  render() {
    return (
      <div className="lottery-presenter">
        <HistoryContainer
          wonLots={this.props.wonLots}
          deleteHistory={this.props.deleteHistory}
        />
        <LotteryDisplayContainer wonLots={this.props.latestWonLots} />
        <div className="lottery-operator">
          <ChangeLotNumContainer
            chosenNum={this.props.chosenNum}
            addChosenNum={num => this.props.addChosenNum(num)}
            changeChosenNum={changedNum =>
              this.props.changeChosenNum(changedNum)
            }
          />
          <LotteryButtonContainer
            drawLots={this.props.drawLots}
            lotteryNums={this.props.lots}
          />
        </div>
      </div>
    );
  }
}
