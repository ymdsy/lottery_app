import React from "react";
import { EnterCSVPresenter } from "./enterCSVPresenter.js";
import throttle from "lodash/throttle";

export class EnterCSVContainer extends React.Component {
  constructor(props) {
    super(props);
    this.enterCsv = throttle(this.enterCsv.bind(this), 1500);
  }

  enterCsv(value) {
    const parsedData = value
      .split(/[ ]{0,},{1,}/)
      .filter(value => value !== " " && value.length > 0);
    this.props.updateParsedData(parsedData);
  }

  render() {
    return (
      <>
        <EnterCSVPresenter enterCsv={value => this.enterCsv(value)} />
      </>
    );
  }
}
