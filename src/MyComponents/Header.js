
// Header.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


export default function Header() {
  
  const iconStyle = {
    verticalAlign: 'middle',
    fontSize: '1.5rem', // Adjust the size as needed
  };

  
  const linkStyle = {
    textDecoration: 'none', // Removes the underline from the link
    color: 'inherit', // Inherits the color from the parent element
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent black overlay
    padding: '5px 10px', // Adds some padding around the text
    borderRadius: '4px', // Optional: rounds the corners of the background
  };
  
 
  return (
    <nav className="navbar">
       <div className="container-fluid">
        {/* Left side: Profile icon and "My List" */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Separate Link for the icon */}
          <Link to="/profile" style={linkStyle}>
            <FontAwesomeIcon icon={faUser} style={iconStyle} />
          </Link>
         
          
          {/* Separate Link for the "My List" text */}
          <Link to="/home" style={linkStyle}>
            My List
          </Link>
          

        </div>

        {/* Right side: "Public List" and Settings icon */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          {/* The Link component with the linkStyle for "Public List" */}
          <Link to="/public-list" style={linkStyle}>
            Public List
          </Link>
          {/* The Link component for the settings icon */}
          <Link to="/settings" style={linkStyle}>
            <FontAwesomeIcon icon={faCog} style={iconStyle} />
          </Link>
        </div>
      </div>
      
      <hr></hr>
    </nav>
    
  );
}
