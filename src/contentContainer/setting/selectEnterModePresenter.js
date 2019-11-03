import React from "react";

export function SelectEnterModePresenter(props) {
  return (
    <div>
      <button
        class={
          props.mode === props.csvMode
            ? "btn btn_active select-enter-mode__btn"
            : "btn select-enter-mode__btn"
        }
        onClick={() => props.switchMode(0)}
      >
        CSVMode
      </button>
      <button
        class={
          props.mode === props.numberMode
            ? "btn btn_active select-enter-mode__btn"
            : "btn select-enter-mode__btn"
        }
        onClick={() => props.switchMode(1)}
      >
        NumberMode
      </button>
    </div>
  );
}
