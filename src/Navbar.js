import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    
    <div className="navbar">
      <div className="logo">
      <h1 className="logoh1">R<span>akhi</span></h1>
      </div>
      <div className="ul">
         <li><Link to="/">Home</Link></li>  
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </div>
    </div>
  );
}

