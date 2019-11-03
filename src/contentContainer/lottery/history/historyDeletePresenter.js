import React from "react";
import "./historyDeletePresenter.css";

export function HistoryDeletePresenter(props) {
  return (
    <div class="history-delete">
      <button class="btn" onClick={() => props.deleteHistory()}>
        履歴削除
      </button>
    </div>
  );
}
