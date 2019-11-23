import React from "react";
import { SetBackgroundPresenter } from "./setBackgroundPresenter.js";

export class SetBackgroundContainer extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   this.state = {
  //     targetLots: this.props.lots,
  //     latestWonLots: [],
  //     wonLots: [],
  //     chosenNum: 3
  //   };
  //   }
  render() {
    return (
      <>
        <SetBackgroundPresenter
          bgImgUrl={this.props.bgImgUrl}
          bgMode={this.props.bgMode}
          bgOriginalMode={this.props.bgOriginalMode}
          bgFullMode={this.props.bgFullMode}
          changeBgMode={this.props.changeBgMode}
          updateBgImgUrl={url => this.props.updateBgImgUrl(url)}
        />
      </>
    );
  }
}
