import React from "react";
import "./Intraction.css";
import Logo from '../Image/logo.png'
import Pulse from 'react-reveal/Pulse';
export default function Intraction() {
  return (
    <Pulse>
    <div className="MainDiv">
      <div className="SecondDiv">
     
        <div className="Heading">FrontEnd & Ux Designer</div>
        <div className="IntroductionText">
          <span>Hello,</span>
          <br />I am Prateek.I design and code
          <br />
          Beautifully Complex thing. <br />& <br />I Love What I do.
        </div>
        <div>
          <img src={Logo} />
        </div>
        <div className="Button_div">
          <button>Hire Me</button>
        </div>
      
      </div>
    </div>
    </Pulse>
  );
}
