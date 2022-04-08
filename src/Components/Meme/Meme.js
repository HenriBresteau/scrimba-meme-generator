import React from "react";
import "./style.css";
import memeData from "../../data/meme.js";

export default function Meme() {
  return (
    <form>
      <div className="form-grid">
        <div className="form-input-top">
          <input type="text" />
        </div>
        <div className="form-input-bot">
          <input type="text" />
        </div>
        <div className="form-submit">
          <input
            type="button"
            value="Get a new meme Image 🖼️"
            className="btn"
          />
        </div>
      </div>
    </form>
  );
}
