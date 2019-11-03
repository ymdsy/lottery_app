import React from "react";
import "./historyDeletePresenter.css";

export function HistoryDeletePresenter(props) {
  return (
    <>
      <button
        class="btn history-delete__btn"
        onClick={() => props.deleteHistory()}
      >
        履歴削除
      </button>
    </>
  );
}
