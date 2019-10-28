import React from "react";
import "./historyPresenter.css";
import { HistoryDeleteContainer } from "./historyDeleteContainer.js";

export function HistoryPresenter(props) {
  return (
    <div>
      <button className="historyBtn" onClick={props.switchHistory}>
        history
      </button>
      <div className={props.isOpen ? "history history__active" : "history"}>
        <ul>
          {props.wonLots.map(lot => (
            <li key={lot.toString()}>{lot}</li>
          ))}
        </ul>
        <HistoryDeleteContainer deleteHistory={() => props.deleteHistory()} />
      </div>
    </div>
  );
}
