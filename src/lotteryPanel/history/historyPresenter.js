import React from "react";
import "./historyPresenter.css";

export function History(props) {
  return (
    <div>
      <button className="historyBtn" onClick={() => props.switchHistory()}>
        history
      </button>
      <div id="history">
        履歴
        <ul>
          {props.wonLots.map(lot => (
            <li>{lot}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}