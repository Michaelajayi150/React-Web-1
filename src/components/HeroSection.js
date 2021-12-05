import React from "react";
import * as FaIcons from "react-icons/fa";
import Button from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="./video/video-2.mp4"
        muted
        loop
        autoPlay={true}
        controls=""
      ></video>
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-button">
        <Button
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          children="GET STARTED"
        />
        <Button buttonStyle="btn-primary" buttonSize="btn-large">
          WATCH TRAILER <FaIcons.FaPlayCircle className="trailer-logo" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
