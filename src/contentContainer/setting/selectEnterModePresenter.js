import React from "react";

export function SelectEnterModePresenter(props) {
  return (
    <div>
      <button
        class="btn select-enter-mode__btn"
        onClick={() => props.switchMode(0)}
      >
        CSVMode
      </button>
      <button
        class="btn select-enter-mode__btn"
        onClick={() => props.switchMode(1)}
      >
        NumberMode
      </button>
    </div>
  );
}
