import React from "react";

export function HistoryDelete(props) {
  return (
    <div>
      <button onClick={() => props.deleteHistory()}>履歴削除</button>
    </div>
  );
}
