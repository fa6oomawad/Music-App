import React from 'react';
import "./scss/main.css";


function SideNav(props){
    return (
        <div className="side-nav">
        <h3>Discover</h3>
        <ul className="side-list">
          <li>Top songs</li>
          <li>Trending Artists</li>
          <li>New Songs</li>
          <li>Best of</li>
        </ul>
      </div>
    )
}
export default SideNav;