import React from "react";
import logo from "./logo.svg";
import "./scss/main.css";
import SideNav from './SideNav';
import MainBox from './MainBox'
function App() {
  return (
    <div className="full-page">
    <SideNav/>
    <MainBox/>
    </div>
  );
}

export default App;
