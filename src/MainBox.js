import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import ArtistInfo from "./ArtistInfo";
class MainBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemdata: null
    };
    this.settingPlayer = this.settingPlayer.bind(this);
  }
  settingPlayer(item) {
    this.setState({ itemdata: item });
  }
  render() {
    return (
      <Router>
        <div className="boxes-wrapper">
          <div className="grid-wrap">
            {this.props.data.data.items.map(item => {
              return (
                <div className="small-box">
                  <div className="overlay">
                    <Link to="/singleArtist">
                      {" "}
                      <p
                        className="play"
                        onClick={() => this.settingPlayer(item)}
                      >
                        show more
                      </p>
                    </Link>
                  </div>
                  <img src={item.images[0].url} alt="album cover" />
                  <span className="title">{item.name}</span>
                </div>
              );
            })}
          </div>
          <Route
            path="/singleArtist"
            render={props => (
              <ArtistInfo {...props} data={this.state.itemdata} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default MainBox;
