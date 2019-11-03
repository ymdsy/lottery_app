import React from "react";
import "./historyPresenter.css";
import { HistoryDeletePresenter } from "./historyDeletePresenter.js";

export function HistoryPresenter(props) {
  return (
    <>
      <button
        className={
          props.isOpen ? "btn btn_active history__btn" : "btn history__btn"
        }
        onClick={props.switchHistory}
      >
        history
      </button>
      <div className={props.isOpen ? "history history__active" : "history"}>
        <ul>
          {props.wonLots.map(lot => (
            <li key={lot.toString()}>{lot}</li>
          ))}
        </ul>
        <HistoryDeletePresenter deleteHistory={() => props.deleteHistory()} />
      </div>
    </>
  );
}
