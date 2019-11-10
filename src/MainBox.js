import React, { Component } from "react";

class MainBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playstatus: false,
      songlink: null
    };
    this.settingPlayer = this.settingPlayer.bind(this);
  }
  settingPlayer(link) {
    this.setState({ playstatus: true, songlink: link });
  }
  render() {
    return (
      <div className="boxes-wrapper">
        <div className="grid-wrap">
          {this.props.data.slice(0, 15).map(item => {
            return (
              <div className="small-box">
                <div className="overlay">
                  <p
                    className="play"
                    onClick={() => {
                      this.settingPlayer();
                    }}
                  >
                    click here
                  </p>
                </div>
                <img src={item.images[0].url} alt="album cover" />
                <span className="title">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MainBox;
