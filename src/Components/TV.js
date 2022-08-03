import React from "react";
import "./TV.css";
import tv from "./tv.png";
import "./Title.css";
import "./Subtitle.css";
const TV = () => {
  return (
    <div className="box">

    <div className="tv">
      <div className="title">
        <h1>Enjoy on your TV.</h1>
      </div>
      <div className="subtitle">
        <h2>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </h2>
      </div>
      <div>
        <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay playsInline muted loop></video>
        <img className='image' src={tv} alt="" />
      </div>
    </div>
    </div>
  );
};
export default TV;
