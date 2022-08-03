import React from "react";
import "./Title.css";
import "./Subtitle.css";
import styles from "./Mobile.module.css";
const Mobile = () => {
  return (
    <div className={styles.MobileComponent}>
      <div className={styles.mobile}>
        <div className="title">
          <h1>Download your shows to watch offline.</h1>
        </div>
        <div className="subtitle">
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
      </div>
      <div className={styles.image}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />
      </div>
      <div className={styles.black}>
        <div className={styles.downloadAnimation}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            alt=""
          />
        </div>
        <div className={styles.strange}>
          <div className={styles.text0}>Stranger Things</div>
          <div className={styles.text1}>Downloading...</div>
        </div>
        <div className={styles.download}>
          <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"></video>
        </div>
      </div>
    </div>
  );
};
export default Mobile;
