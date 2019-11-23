import React from "react";
import "./App.css";
import { SwitchPanelPresenter } from "./switchPanel/switchPanelPresenter.js";
import { ContentContainer } from "./contentContainer/ContentContainer.js";

// くじびきor設定モードの定数
const LOTTERY_MODE = 0;
const SETTING_MODE = 1;

// 背景画像の表示方法の定数
const BG_ORIGINAL = "";
const BG_FULL = "100%";

class App extends React.Component {
  constructor() {
    super(); // これが必要な理由調べること。
    this.state = {
      lots: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      mode: SETTING_MODE,
      bgImgUrl: "",
      bgMode: BG_ORIGINAL
    };

    this.changeBgMode = this.changeBgMode.bind(this);
    this.switching = this.switching.bind(this);
    this.updateLots = this.updateLots.bind(this);
    this.updateBgImgUrl = this.updateBgImgUrl.bind(this);
  }

  /**
   * くじ引きモードか設定モードかを切り替える。
   * @param 切り替えるモードの固定数値 num
   */
  switching(num) {
    if (num === LOTTERY_MODE || num === SETTING_MODE) {
      this.setState({
        mode: num
      });
    }
  }

  /**
   * くじびき対象となるデータを上書きする。
   * @param くじの対象としたいデータ data
   */
  updateLots(data) {
    this.setState({
      lots: data
    });
  }

  /**
   * 背景画像のURLを変更する。
   * @param 背景画像のURL url
   */
  updateBgImgUrl(url) {
    this.setState({
      bgImgUrl: url
    });
  }

  /**
   * 背景画像の表示方法を変更する
   * @param 背景画像の表示方法モード mode
   */
  changeBgMode(mode) {
    this.setState({
      bgMode: mode
    });
  }

  /**
   * 背景画像のstyleの生成を行う。
   */
  getBgStyle() {
    const style = {
      backgroundImage: "url(" + this.state.bgImgUrl + ")",
      backgroundSize: this.state.bgMode
    };
    return style;
  }

  render() {
    return (
      <div style={this.getBgStyle()}>
        <SwitchPanelPresenter
          lotteryMode={LOTTERY_MODE}
          mode={this.state.mode}
          settingMode={SETTING_MODE}
          switching={num => this.switching(num)}
        />
        <ContentContainer
          bgImgUrl={this.state.bgImgUrl}
          bgMode={this.state.bgMode}
          bgOriginalMode={BG_ORIGINAL}
          bgFullMode={BG_FULL}
          changeBgMode={this.changeBgMode}
          lotteryMode={LOTTERY_MODE}
          lots={this.state.lots}
          mode={this.state.mode}
          settingMode={SETTING_MODE}
          updateBgImgUrl={url => this.updateBgImgUrl(url)}
          updateLots={data => this.updateLots(data)}
        />
      </div>
    );
  }
}

export default App;
