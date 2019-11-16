import React from "react";
import "./scss/main.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import ArtistInfo from "./ArtistInfo";
import MainBox from "./MainBox";
function SideNav(props) {
  return (
    <div className="side-nav">
      <h3>Discover</h3>
      <ul className="side-list">
        <li>Top songs</li>
        <Link to="trendingArtists">
          {" "}
          <li>Trending Artists</li>
        </Link>
        <li>New Songs</li>
        <li>Best of</li>
      </ul>
    </div>
  );
}
export default SideNav;
