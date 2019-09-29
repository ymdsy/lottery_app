import React from "react";
import { EnterCSVPresenter } from "./enterCSVPresenter.js";

export class EnterCSVContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        EnterCSVContainer
        <EnterCSVPresenter />
      </div>
    );
  }
}
