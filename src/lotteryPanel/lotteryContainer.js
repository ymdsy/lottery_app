import React from "react";
import { LotteryDisplayContainer } from "./lotteryDisplayContainer.js";
import { LotteryButtonContainer } from "./button/lotteryButtonContainer.js";
import { ChangeNumOfPeopleContainer } from "./changeNumOfPeople/changeNumOfPeopleContainer.js";
import shuffle from "lodash/shuffle";
// import memoize from "lodash/memoize";
// import uniq from "lodash/uniq";

export class LotteryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetNums: this.props.lotteryNums,
      wonNums: [],
      chosenNum: 3
    };
    this.selectLot = this.selectLot.bind(this);
  }

  // drawLots = memoize(lotteryNums => {
  //   this.setState(
  //     {
  //       winningIndexes: shuffle(lotteryNums).slice(0, this.state.chosenNum)
  //     },
  //     console.log
  //   );
  // });

  changeChosenNum(addNum) {
    if (
      typeof addNum !== "number" ||
      Number.isNaN(addNum) ||
      this.state.chosenNum + addNum < 0
    ) {
      console.log("this value is not number or cannot calc.");
      return;
    }
    this.setState({
      chosenNum: this.state.chosenNum + addNum
    });
  }

  selectLot = () => {
    // 配列から指定された数の要素をランダムに取り出し、
    // const nums = shuffle(this.state.targetNums).slice(0, this.state.chosenNum);
    // const selectedNums = shuffle(this.state.targetNums).pop();

    // console.log(selectedNums);

    // // そのインデックスを取得する。
    // let selectedNumsIndex = [];
    // selectedNums.map(num =>
    //   selectedNumsIndex.push(this.state.targetNums.indexOf(num))
    // );
    // console.log(selectedNumsIndex);

    // // 取得したインデックスをもとに、選ばれたくじを削除する。
    // selectedNumsIndex.map(num => this.state.targetNums.splice(num, 1));

    // TODO: わからないので仮置き
    this.setState(
      {
        wonNums: shuffle(this.state.targetNums).slice(0, this.state.chosenNum)
        //     // targetNums: splicedTargetNums
      },
      console.log
    );
  };

  render() {
    // const lotteryNums = this.selectLot();

    return (
      <div>
        LotteryContainer
        <LotteryDisplayContainer lotteryNums={this.state.wonNums} />
        <LotteryButtonContainer
          selectLot={() => this.selectLot()}
          lotteryNums={this.props.lotteryNums}
        />
        <ChangeNumOfPeopleContainer
          chosenNum={this.state.chosenNum}
          changeChosenNum={num => this.changeChosenNum(num)}
        />
      </div>
    );
  }
}
