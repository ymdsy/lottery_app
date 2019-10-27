import React from "react";

export function EnterCSVPresenter(props) {
  return (
    <>
      <textarea onChange={props.enterCsv} />
    </>
  );
}
