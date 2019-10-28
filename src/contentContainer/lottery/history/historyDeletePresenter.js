import React from "react";

export function HistoryDeletePresenter(props) {
  return (
    <>
      <button onClick={() => props.deleteHistory()}>履歴削除</button>
    </>
  );
}
