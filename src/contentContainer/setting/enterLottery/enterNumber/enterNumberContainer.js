import React from "react";
import { EnterNumberPresenter } from "./enterNumberPresenter.js";
import throttle from "lodash/throttle";

const MSG_ENTER_NUM_TOO_BIG = "your enter num is too big!";

export class EnterNumberContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startNum: 0,
      endNum: 0
    };
    this.enterStartNum = throttle(this.enterStartNum.bind(this), 500);
    this.enterEndNum = throttle(this.enterEndNum.bind(this), 500);
  }

  /**
   * 入力値に応じて、パース済みのくじをupdateする。
   *
   * @param 入力値（開始値） value
   */
  enterStartNum(value) {
    const enterNum = parseInt(value);

    if (this.isNotNomalNum(enterNum)) {
      return;
    }

    this.setState({
      startNum: enterNum
    });

    const parsedData = this.getArrStartNumToEndNum(enterNum, this.state.endNum);
    if (parsedData.length > 0) {
      this.props.updateParsedData(parsedData);
    }
  }

  /**
   * 入力値に応じて、パース済みのくじをupdateする。
   *
   * @param 入力値（終了値） value
   */
  enterEndNum(value) {
    const enterNum = parseInt(value);

    if (this.isNotNomalNum(enterNum)) {
      return;
    }

    this.setState({
      endNum: enterNum
    });

    const parsedData = this.getArrStartNumToEndNum(
      this.state.startNum,
      enterNum
    );
    if (parsedData.length > 0) {
      this.props.updateParsedData(parsedData);
    }
  }

  /**
   * 正しい数値が入力されていない場合にtrueを返す。
   * 数値が大きすぎると処理が重くなるので、1000未満の値を入力できることとする。
   *
   * @param 入力値 num
   */
  isNotNomalNum(num) {
    if (typeof num !== "number" || num <= 0 || isNaN(num)) {
      return true;
    }
    if (num > 1000) {
      console.log(MSG_ENTER_NUM_TOO_BIG);
      return true;
    }
    return false;
  }

  /**
   * startNum ~ endNum の配列を作成する。
   * endNumよりstartNumのほうが大きい場合は、空の配列を返す。
   *
   * @param 開始値 startNum
   * @param 終了値 endNum
   */
  getArrStartNumToEndNum(startNum, endNum) {
    if (endNum - startNum <= 0) {
      return [];
    }
    // ex: startNum=1, endNum=10 => [1,2,3,4,5,6,7,8,9,10]
    return [...Array(endNum + 1 - startNum).keys()].map(i => i + startNum);
  }

  render() {
    return (
      <>
        <EnterNumberPresenter
          enterStartNum={value => this.enterStartNum(value)}
          enterEndNum={value => this.enterEndNum(value)}
        />
      </>
    );
  }
}
