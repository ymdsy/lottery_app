import React from "react";
import "./historyDeletePresenter.css";

export function HistoryDeletePresenter(props) {
  return (
    <div className="history-delete">
      <button className="btn" onClick={props.deleteHistory}>
        履歴削除
      </button>
    </div>
  );
}
