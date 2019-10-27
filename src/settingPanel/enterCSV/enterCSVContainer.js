import React from "react";
import { EnterCSVPresenter } from "./enterCSVPresenter.js";
import split from "lodash/split";

export class EnterCSVContainer extends React.Component {
  constructor(props) {
    super(props);
    this.enterCsv = this.enterCsv.bind(this);
  }

  enterCsv(event) {
    const parsedData = split(event.target.value, ",");
    this.props.updateParsedData(parsedData);
  }

  render() {
    return (
      <>
        EnterCSVContainer
        <br />
        <EnterCSVPresenter enterCsv={data => this.enterCsv(data)} />
      </>
    );
  }
}
