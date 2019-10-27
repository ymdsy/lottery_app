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

    this.enterCsv = this.enterCsv.bind(this);
  }

  enterCsv(event) {
    const parsedData = split(event.target.value, ",");
    this.props.updateLots(parsedData);

    this.setState({
      parsedData: parsedData,
      enterdValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        EnterCSVContainer
        <EnterCSVPresenter
          value={this.state.enterdValue}
          enterCsv={data => this.enterCsv(data)}
        />
      </div>
    );
  }
}
