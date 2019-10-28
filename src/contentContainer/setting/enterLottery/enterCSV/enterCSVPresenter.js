import React from "react";

export function EnterCSVPresenter(props) {
  return (
    <>
      <textarea onChange={event => props.enterCsv(event.target.value)} />
    </>
  );
}
