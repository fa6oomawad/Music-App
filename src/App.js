import React from "react";
import logo from "./logo.svg";
import "./scss/main.css";

function App() {
  return (
    <div className="full-page">
      <div className="side-nav">
        <h3>Discover</h3>
        <ul>
          <li>Top songs</li>
          <li>Trending Artists</li>
          <li>New Songs</li>
          <li>Best of</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
