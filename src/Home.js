import React from "react";

function Home(props) {
  return (
    <div className="homeBox">
      <div className="grid-wrap2">
        {props.data.slice(0, 5).map((item, index) => {
          return (
            <div className={`gridbox box${index}`}>
              <img src={item.images[0].url} alt="album cover" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
