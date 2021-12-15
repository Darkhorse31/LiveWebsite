import React, { useEffect } from "react";
import "./Introduction.css";
import anime from "animejs/lib/anime.es.js";

export default function Introduction() {
  return (
    <div className="IntroductionMainDiv">
      <div className="IntroductionChilDiv">
        <nav>Things Make me Happy</nav>
        <div className="para">
          In 2019 I am taking a admission in my graduation University. Scince I
          am Interested in Designing .I Love to design new
          <br />
          <span>UX/UI</span> of apps and Website. And I also Love to code them.
        </div>
      </div>
      
      <div id="background-wrap">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
      </div>
    </div>
  );
}
