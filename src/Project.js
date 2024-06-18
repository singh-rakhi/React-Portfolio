import React from 'react';
import portfolio from "./Assets/portfolio.png";
import todo from "./Assets/todo.webp";
import "./Project.css";

export default function Project(){
  return (
      <div className="project">
         <div className="headingprojects">
          <h1>My Projects</h1>
          <div className="projects1">
              <div className="box1">
                  <div className="headingPortfolio">
                      <h4>Portfolio</h4>
                  </div>
                  <img src={portfolio} alt=""  className="portfolioimg"/>
              </div>
              <div className="box1">
                  <div className="headingTodo">
                      <h4>Spotify clone</h4>
                  </div>
                  <img src={todo} alt="" className="todoimg"/>
              </div>
              
          </div>
         </div>
      </div>
  )
}