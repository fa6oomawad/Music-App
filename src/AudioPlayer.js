import React from "react";

function AudioPlayer(props) {
  return (
    <div className="audio-box">
      <audio controls className="audioo">
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
