import React from "react";
import   "./Title.css";
import classes from './Children.module.css'
const Child = () => {
  return (
    <div className={classes.box}>
        <div className={classes.boxDetails}>
      <div className="title">
        <h1>Create profiles for children.</h1>
      </div>
      <div className="subtitle">
          <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
      </div>
      <div>
          <img src="https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" alt="" />
      </div>
      </div>
    </div>
  );
};
export default Child;
