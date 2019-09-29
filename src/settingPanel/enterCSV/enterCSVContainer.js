import React from "react";
import { EnterCSVPresenter } from "./enterCSVPresenter.js";
import split from "lodash/split";

export class EnterCSVContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parsedData: [],
      enterdValue: ""
    };

    this.parseCSV = this.parseCSV.bind(this);
  }

  parseCSV(event) {
    this.setState({
      parsedData: split(event.target.value, ","),
      enterdValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        EnterCSVContainer
        <EnterCSVPresenter
          value={this.state.enterdValue}
          parseCSV={data => this.parseCSV(data)}
        />
      </div>
    );
  }
}
