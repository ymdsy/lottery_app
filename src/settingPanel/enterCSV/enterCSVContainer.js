import React from "react";
import { EnterCSVPresenter } from "./enterCSVPresenter.js";

export class EnterCSVContainer extends React.Component {
  constructor(props) {
    super(props);
    this.enterCsv = this.enterCsv.bind(this);
  }

  enterCsv(event) {
    const parsedData = event.target.value
      .split(/[ ]{0,},{1,}/)
      .filter(value => value !== " " && value.length > 0);
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
