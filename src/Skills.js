import React from 'react';
import jscssreact from "./Assets/jscssreact.png";
import BTimages from "./Assets/BTimages.png" ;
import "./Skills.css";

export default function Skills(){
  return(
      <div className="skills">
          <div className="headingskills">
              <h1>My Skills</h1>
          </div>
          <div className="skills1">
              <div className="react">
                  <div className="reactimg">
                      <img src={jscssreact} alt="" className="img1" />
                  </div>
              </div>
              <div className="html">
                  <div className="BTimg">
                      <img src={BTimages} alt="" className="img2"/>
                  </div>
              </div>
              
              </div>
          </div>
      
  )
}