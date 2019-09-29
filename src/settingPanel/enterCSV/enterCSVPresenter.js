import React from "react";

export function EnterCSVPresenter(props) {
  return (
    <div>
      <textarea value={props.value} onChange={props.parseCSV} />
    </div>
  );
}
