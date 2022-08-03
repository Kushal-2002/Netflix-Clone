import React, { Children } from "react";
import "./FrontPage.css";
import tv from './tv.png'
import PC from "./PC";
import logo from "./image-2.png"; 
import TV from "./TV";
import EmailForm from "./EmailForm";
import Title from "./Title";
import Mobile from "./Mobile";
import EmailFormTitle from "./EmailFormTitle";
import Subtitle from "./Subtitle";
import Child from "./Children";
const FrontPage = (props) => {
  return (
    <div>
      <div className="container">
        <img src={logo} alt="" />
        <Title></Title>
        <Subtitle></Subtitle>
        <EmailFormTitle></EmailFormTitle>
        <EmailForm></EmailForm>
      </div>
        <TV></TV>
        <Mobile></Mobile>
        <PC></PC>
        <Child></Child>
        <div className="repeat">
        <EmailFormTitle></EmailFormTitle>
        <EmailForm></EmailForm>
        </div>
    </div>
  );
};
export default FrontPage;
