import React from 'react';
import mypicc from "./Assets/mypicc.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="left">
        <div className="para">
          <p>Web Developer,</p>
        </div>
        <div className="herosectionh1">
          <h1>I'm <span>Rakhi</span></h1>
        </div>
        <div className="stack">
          <h1>Full Stack Developer</h1>
        </div>
        <div className="para2">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quam voluptatibus totam velit rem? Dolorem, eligendi exercitationem dolore.</p>
        </div>
      </div>
      <div className="right">
        <img src={mypicc}  />
      </div>
    </div>
  );
}