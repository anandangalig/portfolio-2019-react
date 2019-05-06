import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuMobile.scss';

const openNav = () => {
  document.getElementById('mobile_nav').style.width = '100%';
};

const closeNav = () => {
  document.getElementById('mobile_nav').style.width = '0';
};

const MenuMobile = props => {
  return (
    <nav>
      <div id="mobile_nav" className="overlay">
        <button className="close_btn" onClick={closeNav}>
          &times;
        </button>
        <div className="overlay-content">
          <ul>
            <li>
              <NavLink exact to="/" onClick={closeNav}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about" onClick={closeNav}>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/projects" onClick={closeNav}>
                PROJECTS
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <span style={{ fontSize: '40px', cursor: 'pointer' }} onClick={openNav}>
        &#9776;
      </span>
    </nav>
  );
};

export default MenuMobile;
