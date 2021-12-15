import React from "react";
import "./Usetec.css";
export default function Usetec() {
  return (
    <div className="Usemaindiv">
      <heading>Things Which help me For Designing</heading>
      <div className="UsemaindivChild">
        <div className="design">
          <div className="Top">
            <heading>Design</heading>
            <p>
              I value simple content structure,  <br/>clean design patterns,  <br/>and
              thoughtful  <br/>interactions.
            </p>
          </div>
          <div className="middle">
            <heading>Things I enjoy designing:</heading>
            <p>UX, UI, Web, Mobile, Apps, Logos</p>
          </div>
          <div className="bottom">
            <heading>Design Tools:</heading>
            <ul>
              <li>Figma </li>
              <li>Pen & Paper</li>
              <li>Sketch</li>
              <li>Adobe Xd</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
        <div className="Front_Developer">
          <div className="Top">
            <heading>Front-end Developer</heading>
            <p>
              I like to code things from scratch, and enjoy bringing ideas  to <br/>
              life in the browser.
            </p>
          </div>
          <div className="middle">
            <heading>Languages I Use:</heading>
            <p>HTML, Pug, Slim, CSS, Sass, Less,React</p>
          </div>
          <div className="bottom">
            <heading>Dev Tools:</heading>
            <ul>
              <li>Atom</li>
              <li>Vs Code</li>
              <li>Terminal</li>
              <li>Github</li>
              <li>Codepen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
