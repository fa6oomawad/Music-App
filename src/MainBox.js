import React from "react";

function MainBox(props) {
  return (
    <div className="boxes-wrapper">
      <div className="grid-wrap">
        {props.data.slice(0, 15).map(item => {
          return (
            <div className="small-box">
              <img src={item.images[0].url} alt="album cover" />
              <span className="title">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainBox;
