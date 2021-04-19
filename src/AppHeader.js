import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    {/* <div className="center-column">
    
    </div> */}
    <nav>
    <h1>🍽 Cloud Kitchen</h1>
      <ol className="center-column">
        <li>
          <NavLink to="/">Browse restaurants</NavLink>
        </li>
        <li>
          <NavLink to="/random">Get offer</NavLink>
        </li>
        <li>
          <NavLink to="/about">About us</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
