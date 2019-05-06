import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuMobile.scss';

const MenuMobile = props => {
  const mobileMenuToggle = useRef(null);
  const closeNav = () => {
    mobileMenuToggle.current.style.width = '0';
  };
  const openNav = () => {
    mobileMenuToggle.current.style.width = '100%';
  };
  return (
    <nav>
      <div id="mobile_nav" className="overlay" ref={mobileMenuToggle}>
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
