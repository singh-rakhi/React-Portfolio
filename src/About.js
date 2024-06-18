import React from 'react';
import "./About.css";

export default function About(){
  return(
      <div className="about">

       <div className="aboutsection">
          <div className="headingabout">
              <h1>ABOUT</h1>
          </div>
          <div className="headingh3about">
              <h3>I am a self-taught web developer who transitioned careers to pursue my passion for coding and creating websites.</h3>
          </div>
          <div className="paraabout">
              <p>I have experience with CSS, HTML, and JavaScript, and a basic understanding of React, aiming to launch a career in the IT industry with a fresh perspective.</p>
          </div>
          <div className="para1about">
              <p>In this portfolio, I aim to showcase my proficiency in HTML, CSS, and React, highlighting my skills and expertise in these technologies.</p>
          </div>
          <div className="btnabout">
              <button className="btnabout1">Download CV</button>
          </div>
       </div>
      </div>
  )
}
