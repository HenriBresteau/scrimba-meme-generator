import React from "react";

import "./style.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav--logo">
        <div className="logo">
          <img src="./images/trollface.svg" alt="trollface" />
        </div>
        <div className="brand">
          <h2>Meme Generator</h2>
        </div>
      </div>
      <div className="nav--course">
        <h3>React Course - Project 3</h3>
      </div>
    </nav>
  );
}
