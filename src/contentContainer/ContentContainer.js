import React from "react";
import { LotteryPresenter } from "./lottery/lotteryPresenter.js";
import { SettingContainer } from "./setting/settingContainer.js";

const NUM_FORMAT_ERR_MSG = "this value is not number or cannot calc.";
const ALL_LOTS_DRAW_MSG = "all lots was draw.";

export class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetLots: this.props.lots,
      latestWonLots: [],
      wonLots: [],
      chosenNum: 3
    };
    this.drawLots = this.drawLots.bind(this);
    this.deleteHistory = this.deleteHistory.bind(this);
    this.changeChosenNum = this.changeChosenNum.bind(this);
  }

  /**
   * 一度に抽選するくじの数を加えるためのメソッド。
   * @param {加える人数} addNum
   */
  addChosenNum(addNum) {
    if (
      typeof addNum !== "number" ||
      Number.isNaN(addNum) ||
      this.state.chosenNum + addNum < 0
    ) {
      console.log(NUM_FORMAT_ERR_MSG);
      return;
    }
    this.setState({
      chosenNum: this.state.chosenNum + addNum
    });
  }

  /**
   * 一度に抽選するくじの数を変更するためのメソッド。
   * @param {変更する人数} changedNum
   */
  changeChosenNum(changedNum) {
    const newNum = Number(changedNum);
    if (newNum === 0 || Number.isNaN(newNum) || newNum <= 0) {
      console.log(NUM_FORMAT_ERR_MSG);
      return;
    }
    this.setState({
      chosenNum: newNum
    });
  }

  /**
   * くじを引くメソッド。
   * 引かれたくじは抽選可能なくじから消え、引かれたくじとして登録される。
   */
  drawLots() {
    const latestWonLots = [];
    const target = this.state.targetLots.slice();

    // くじを引く
    for (let i = 0; i < this.state.chosenNum; i++) {
      //　これ以上くじが引けないエラー
      if (target.length === 0) {
        console.log(ALL_LOTS_DRAW_MSG);
        break;
      }
      const drawLotIndex = Math.floor(Math.random() * target.length);
      latestWonLots.push(target[drawLotIndex]);
      target.splice(drawLotIndex, 1);
    }

    // 取得された最新のくじを抽選済みのくじに追加
    const wonLots = this.state.wonLots.slice();
    latestWonLots.map(lot => wonLots.push(lot));

    this.setState({
      latestWonLots: latestWonLots,
      wonLots: wonLots,
      targetLots: target
    });
  }

  /**
   * 抽選履歴を削除する。
   */
  deleteHistory() {
    this.setState({
      targetLots: this.props.lots,
      latestWonLots: [],
      wonLots: []
    });
  }

  render() {
    if (this.props.mode === this.props.lotteryMode) {
      return (
        <LotteryPresenter
          chosenNum={this.state.chosenNum}
          latestWonLots={this.state.latestWonLots}
          lots={this.props.lots}
          wonLots={this.state.wonLots}
          addChosenNum={num => this.addChosenNum(num)}
          changeChosenNum={changedNum => this.changeChosenNum(changedNum)}
          deleteHistory={this.deleteHistory}
          drawLots={this.drawLots}
        />
      );
    } else if (this.props.mode === this.props.settingMode) {
      return (
        <SettingContainer
          updateLots={data => {
            this.props.updateLots(data);
            this.deleteHistory();
          }}
          bgImgUrl={this.props.bgImgUrl}
          bgMode={this.props.bgMode}
          bgOriginalMode={this.props.bgOriginalMode}
          bgFullMode={this.props.bgFullMode}
          changeBgMode={this.props.changeBgMode}
          updateBgImgUrl={url => this.props.updateBgImgUrl(url)}
        />
      );
    }
  }
}
