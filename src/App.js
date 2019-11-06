import React, { Component } from "react";
import logo from "./logo.svg";
import "./scss/main.css";
import axios from "axios";
import SideNav from "./SideNav";
import MainBox from "./MainBox";
import AudioPlayer from "./AudioPlayer";
import Home from "./Home";
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "17c7989532b543d3b35deb70c943a31c";
export const redirectUri = "http://localhost:3000/";
export const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state"
];

//get the hash of url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      token: null
    };
    this.getSpotifyData = this.getSpotifyData.bind(this);
  }

  getSpotifyData(token) {
    axios
      .get("https://api.spotify.com/v1/browse/new-releases", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(data => {
        this.setState({ data: data.data.albums.items });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    let _token = hash.access_token;
    if (_token) {
      this.setState({ token: _token });
      this.getSpotifyData(_token);
    }
  }

  render() {
    return (
      <div className="full-page">
        {!this.state.token && (
          <div className="startBox">
            <span className="start-text">
              In order to start using the web App{" "}
            </span>
            <span className="start-text">
              please login to your spotifiy account
            </span>

            <a
              className="start-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              <button className="start-btn">login</button>
            </a>
          </div>
        )}
        {this.state.token && (
          <div>
            <SideNav />
            {this.state.data && <Home data={this.state.data} />}
            {console.log(this.state.data)}
          </div>
        )}
      </div>
    );
  }
}

export default App;
