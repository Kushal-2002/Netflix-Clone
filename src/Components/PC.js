import React from "react";
import "./Title.css";
import classes from "./PC.module.css";
import "./Subtitle.css";
const PC = () => {
  return (
    <div className={classes.pc}>
      <div className={classes.pcDetails}>
        <div className="title">
          <h1>Watch everywhere.</h1>
        </div>
        <div className="subtitle">
          <h2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h2>
        </div>
      </div>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          alt=""
        />
      </div>
      <div className={classes.animation}>
        <video
          autoPlay
          playsInline
          muted
          loop
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
        ></video>
      </div>
    </div>
  );
};
export default PC;
