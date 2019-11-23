import React from "react";
import "./setBackgroundPresenter.css";

export function SetBackgroundPresenter(props) {
  return (
    <>
      <div className="setBgPresenter">背景画像変更</div>
      <div className="setBgPresenter">
        URL：
        <input
          className="urlInput input"
          type="url"
          value={props.bgImgUrl}
          onChange={event => props.updateBgImgUrl(event.target.value)}
        />
      </div>
      <div className="setBgPresenter">
        <input
          type="radio"
          id="bgOriginalMode"
          name="bgMode"
          onChange={() => {
            props.changeBgMode(props.bgOriginalMode);
          }}
          checked={props.bgMode === props.bgOriginalMode ? "checked" : ""}
        />
        <label htmlFor="bgOriginalMode">元のサイズを保持</label>
        <input
          type="radio"
          id="bgFullMode"
          name="bgMode"
          onChange={() => props.changeBgMode(props.bgFullMode)}
          checked={props.bgMode === props.bgFullMode ? "checked" : ""}
        />
        <label htmlFor="bgFullMode">画面の大きさに合わせる</label>
      </div>
      <div className="setBgPresenter">
        <button className="btn" onClick={() => props.updateBgImgUrl("")}>
          現在の背景を削除
        </button>
      </div>
    </>
  );
}
