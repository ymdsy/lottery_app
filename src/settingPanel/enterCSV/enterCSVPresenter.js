import React from "react";

export function EnterCSVPresenter(props) {
  return (
    <div>
      <textarea onChange={() => console.log("changed")} />
    </div>
  );
}
